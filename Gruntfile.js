module.exports = function(grunt){
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.initConfig({
	uglify : {
	 target1 : {
		src : '2048.js',
		dest : '2048.min.js'
	 }
	}
 });
 grunt.registerTask('default',['uglify']);
}
