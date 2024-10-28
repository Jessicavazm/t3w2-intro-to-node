# NodeJs

#### Package.json
Metadata file - it contains details about your project, such as its installed packages or links to documentation. It's like the heart of your node project. Steps for creating a package.json bellow:
- npm init (standard option, using this you can fill out some important information).
- npm init --y => (default values are used).

#### NodeJs Scripts
Scripts are commands written inside of the package.json to automatize tasks using the 'npm run'. These tasks includes: starting a server, running tests, building code, and more common development tasks

#### Packages && Dependencies
- Required code and packages required by the project to run. When installing a new package or dependency we run 'npm instal + package_name'. 
- Dependencies get installed in a folder called 'node_modules', which should be added to .gitignore file in VS code. 
- When cloning a nodeJs project, you should run 'npm instal' to install it's dependencies since node_modules file is not usually placed in the git repository.
- Dev Dependencies are packages that will not get included in production "builds" of an application, e.g of a dev dependency: Jest - JavaScript testing.


### Try, catch, throw anf finally blocks
After 'throw', the program goes straight to catch block. 

    try {
        // experimentation or execution
        throw some error msg
    } catch {
        // statements
    } finally {
        // always runs
    }