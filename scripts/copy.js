const { promises: fs } = require("fs");
const os = require("os");
const path = require("path");

const pathToAtomixRepo = process.argv[2];

const imagesBaseUrl =
  "https://raw.githubusercontent.com/jared-hexagon/atomix-markdown-docs/master";

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (
      Object.prototype.toString.call(str).toLowerCase() === "[object regexp]"
    ) {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, "g"), newStr);
  };
}

async function* getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

const getMarkdownFilePaths = async () => {
  const pathToSearch = path.resolve(pathToAtomixRepo, "docs");
  let paths = [];

  for await (const filePath of getFiles(pathToSearch)) {
    if (filePath.includes(".md")) {
      paths.push(filePath);
    }
  }

  return paths;
};

const getImageFilePaths = async () => {
  const pathToSearch = path.resolve(pathToAtomixRepo, "docs");
  let paths = [];

  for await (const filePath of getFiles(pathToSearch)) {
    if (filePath.includes(".png")) {
      paths.push(filePath);
    }
  }

  return paths;
};

const processMarkdownFile = async (pathToMarkdownFile) => {
  const markdownBuffer = await fs.readFile(pathToMarkdownFile);
  const markdown = markdownBuffer.toString();

  //   const expandedPathToAtomixRepo = pathToAtomixRepo.replace("~", os.homedir());

  const relativePathInsideThisRepo = pathToMarkdownFile.replace(
    `${pathToAtomixRepo}/`,
    ""
  );
  const replaceWith = `![](${imagesBaseUrl}/${path.dirname(
    relativePathInsideThisRepo
  )}/`;

  const markdownWithFixedImagePaths = markdown.replaceAll(
    /\!\[\]\(\.\//g,
    replaceWith
  );

  const absolutePathInsideThisRepo = path.resolve(
    __dirname,
    "../",
    relativePathInsideThisRepo
  );

  console.debug(`${pathToMarkdownFile} => ${absolutePathInsideThisRepo}`);

  await fs.mkdir(path.dirname(absolutePathInsideThisRepo), { recursive: true });

  await fs.writeFile(absolutePathInsideThisRepo, markdownWithFixedImagePaths);
};

const copyImage = async (pathToImage) => {
  const relativePathInsideThisRepo = pathToImage.replace(
    `${pathToAtomixRepo}/`,
    ""
  );

  const absolutePathInsideThisRepo = path.resolve(
    __dirname,
    "../",
    relativePathInsideThisRepo
  );

  await fs.mkdir(path.dirname(absolutePathInsideThisRepo), { recursive: true });

  console.debug(`${pathToImage} => ${absolutePathInsideThisRepo}`);

  await fs.copyFile(pathToImage, absolutePathInsideThisRepo);
};

const copyImages = async () => {
  const imageFilePaths = await getImageFilePaths();

  console.debug(`Found ${imageFilePaths.length} images`);

  for (const imageFilePath of imageFilePaths) {
    await copyImage(imageFilePath);
  }
};

async function main() {
  try {
    console.debug("Copying...");

    if (!pathToAtomixRepo) {
      throw new Error(
        "Need to provide the path to the Atomix repo eg. ~/Code/atomix"
      );
    }

    const markdownFilePaths = await getMarkdownFilePaths();

    console.debug(`Found ${markdownFilePaths.length} markdown files`);

    for (const markdownFilePath of markdownFilePaths) {
      await processMarkdownFile(markdownFilePath);
    }

    await copyImages();

    console.debug("Copied");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
