(function() {


	tinymce.create('tinymce.plugins.ExamplePlugin', {

		init : function(ed, url) {
			ed.addButton('example', {
				title : 'ซ่อนเนื้อหาแบบคลิกแสดง',
				image : url + '/img/spoiler.png',
				onclick : function() {
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[spoiler] ลงเนื้อหาตรงนี้ [/spoiler]');
                }
			});

		},
		createControl : function(n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('example', tinymce.plugins.ExamplePlugin);
})();