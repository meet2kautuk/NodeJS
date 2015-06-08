module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "node_modules/bootstrap/dist/",
                        src: "**/*",
                        dest: "app/assets/bootstrap/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/jquery/dist/",
                        src: "**/*",
                        dest: "app/assets/jquery/"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/jquery-mockjax/",
                        src: "jquery.mockjax.js",
                        dest: "app/assets/libs/"
                    }
                ]
            }
        }
    });
    
    grunt.loadNpmTasks("grunt-contrib-copy");
    
    grunt.registerTask("default", ["copy:main"]);
};