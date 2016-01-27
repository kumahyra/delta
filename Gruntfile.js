(function(){
    'use strict';

    module.exports = function(grunt){
        require('load-grunt-tasks')(grunt);

        grunt.initConfig({
            jshint:{
                options: {
                    jshintrc: true
                },
                arquitetura : [
                    'arquitetura/**/*.js'
                ],
                app: [
                    'app/**/*.js'
                ]
            },
            copy:{
                cursoangular: {
                    files: [
                        {
                            expand: true,
                            src: [
                                '*.html',
                                'app/**',
                                'arquitetura/**'
                            ],
                            dest: 'build/'
                        }
                    ]
                }
            },
            concat:{
                js: {

                        src: [
                            'app/js/curso_angular.module.js',
                            'build/app/**/*.js',
                            'build/arquitetura/**/*.js',
                            '!build/app/**/*.controller.js'
                        ],
                        dest: 'build/source.js'

                },
                css: {

                    src: [
                        'build/app/**/*.css',
                        'build/arquitetura/**/*.css'
                    ],
                    dest: 'build/source.css'

                }
            },
            clean: {
                build: {
                    src: 'build'
                }
            },
            ngAnnotate: {
                options: {
                    singleQuotes: true
                },
                app: {
                    files: [{
                        expand: true,
                        src:[
                            'build/**/*.js'
                        ]
                    }]
                }
            },
            uglify: {
                build: {
                    expand: true,
                    src: 'build/source.js'
                }
            },
            cssmin: {
                build: {
                    expand: true,
                    src: 'build/source.css'
                }
            },
            htmlmin: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                build: {
                    expand: true,
                    src: ['build/**/*.html']
                }
            },
            autoprefixer: {
                options: {
                    remove: false
                },
                build: {
                    expand: true,
                    src: 'build/source.css'
                }
            },
            ngdocs: {
                options: {
                    dest: 'docs',
                    title: 'Docs',
                    html5Mode: false
                },
                delta: {
                    src: [
                        'app/**/*.js',
                        'arquitetura/**/*.js'
                    ]
                }
            },
            less:{
                app:{
                    files:{
                        'app/arquitetura/style/ca-style.css': 'app/arquitetura/less/ca-style.less'
                    }
                }
            }
        });
        grunt.registerTask('build',
            [
                'clean:build',
                'copy',
                'ngAnnotate',
                'concat',
                'less',
                'autoprefixer',
                'uglify',
                'cssmin',
                'htmlmin',
                'ngdocs'

            ]);
    };
})();