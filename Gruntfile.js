module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/js/scripts.min.js': [
                        'node_modules/angular/angular.min.js',
                        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                        'node_modules/jquery/dist/jquery.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js',
                        'src/app.js',
                        'src/**/*.js'
                    ],
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'src/app.js',
                    'src/**/*.js'
                ],
                dest: 'build/js/scripts.min.js',
            },
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/style.min.css': ['node_modules/bootstrap/dist/css/bootstrap.css', 'src/assets/css/*.css']
                }
            }
        },

        processhtml: {
            dist: {
                files: {
                    'build/index.html': ['src/index.html']
                }
            }
        },

        ngtemplates: {
            build: {
                options: {
                    module: 'templateChacher',
                    standalone: true
                },
                cwd: 'src',
                src: ['**/*html', '!index.html'],
                dest: 'build/template/templates.js'
            }
        },

        connect: {
            build: {
                options: {
                    port: 8000,
                    base: {
                        path: 'build',
                        options: {
                            index: 'index.html',
                            maxAge: 300000
                        }
                    }
                }
            }
        },

        open: {
            build: {
                path: 'http://localhost:8000',
                app: 'Chrome'
            }
        },

        watch: {
            client: {
                files: ['src/**/*'],
                tasks: ['uglify', 'cssmin', 'processhtml', 'ngtemplates'],
                options: {
                    livereload: true
                }
            },
            debug:{
                files: ['src/**/*'],
                tasks: ['concat', 'cssmin', 'processhtml', 'ngtemplates'],
                options: {
                    livereload: true
                }
            }
        }
    });


    grunt.registerTask('default', ['connect:build', 'open:build', 'watch:client']);
    grunt.registerTask('run-debug', ['connect:build', 'open:build', 'watch:debug']);
    grunt.registerTask('build', ['uglify', 'cssmin', 'processhtml', 'ngtemplates']);
    grunt.registerTask('build-debug', ['concat', 'cssmin', 'processhtml', 'ngtemplates']);
};