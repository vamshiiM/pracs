const fs = require('fs').promises;

async function fileSystemOperations() {
    try {
        // 1. Create a Directory
        await fs.mkdir('exampleDir');
        console.log("Directory created successfully!");

        // 2. Write to a File
        await fs.writeFile('exampleDir/example.txt', 'Hello, Node.js!');
        console.log("File written successfully!");

        // 3. Append to the File
        await fs.appendFile('exampleDir/example.txt', '\nAppended text!');
        console.log("Text appended successfully!");

        // 4. Read the File
        const data = await fs.readFile('exampleDir/example.txt', 'utf8');
        console.log("File content:\n", data);

        // 5. Get File Stats
        const stats = await fs.stat('exampleDir/example.txt');
        console.log("File Stats:", stats);

        // 6. Read Directory Contents
        const files = await fs.readdir('exampleDir');
        console.log("Files in directory:", files);

        // 7. Delete the File
        await fs.unlink('exampleDir/example.txt');
        console.log("File deleted successfully!");

        // 8. Remove the Directory
        await fs.rmdir('exampleDir');
        console.log("Directory removed successfully!");

    } catch (err) {
        console.error("Error:", err);
    }
}

// Run the function
fileSystemOperations();



////// using arrow functions

const fs = require('fs').promises;

const fileSystemOperations = async () => {
    try {
        // 1. Create a Directory
        await fs.mkdir('exampleDir');
        console.log("Directory created successfully!");

       /// rest of the above code copy here

    } catch (err) {
        console.error("Error:", err);
    }
};

// Run the function
fileSystemOperations();
