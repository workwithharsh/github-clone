import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// Import controllers
import { addFiles } from "./src/controllers/add.controller.js";
import { commitChanges } from "./src/controllers/commit.controller.js";
import { initRepo } from "./src/controllers/init.controller.js";
import { pullChanges } from "./src/controllers/pull.controller.js";
import { pushChanges } from "./src/controllers/push.controller.js";
import { revertChanges } from "./src/controllers/revert.controller.js";

// Initialize yargs & Define commands
yargs(hideBin(process.argv))
  .command("init", "Create a new repository", {}, initRepo)
  .command("add", "Add files to the staging area", {}, addFiles)
  .command("commit", "Commit staged changes", {}, commitChanges)
  .command("push", "Push commits to the remote repository", {}, pushChanges)
  .command(
    "pull",
    "Fetch and merge changes from the remote repository",
    {},
    pullChanges
  )
  .command("revert", "Revert changes to a previous commit", {}, revertChanges)
  .demandCommand(1, "Please specify an action")
  .help().argv;
