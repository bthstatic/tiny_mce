tinymce.create('tinymce.plugins.hidebtn', {
    createControl: function(n, cm) {
        switch (n) {
            case 'hidebutton':
                var c = cm.createButton('mysplitbutton', {
                    title : 'ซ่อนเนื้อหา',
                    image : '../js/tiny_mce358/themes/advanced/img/hide.png',
                    onclick : function() {
                        //tinyMCE.activeEditor.windowManager.alert('Button was clicked.');
						tinyMCE.activeEditor.execCommand('mceInsertContent', false, '[hide] ลงเนื้อหาตรงนี้ [/hide]');
                    }
                });
		return c;
        }
        return null;
    }
});
tinymce.PluginManager.add('hidebutton', tinymce.plugins.hidebtn);
	// Default skin
	tinyMCE.init({
		// General options
		width : "957",
		height : "500",
		auto_resize:false,
		mode : "exact",
		language : "en",
		elements : "txtbox",
		theme : "advanced",
		valid_children : "+body[style]",
		extended_valid_elements : "marquee,link[rel|type|href],style[type],textarea[name|class|cols|rows]",
		relative_urls : false,
		convert_urls : false,
	    verify_html : false,
	    forced_root_block : false,
	    
		plugins : "hidebutton,autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,wordcount,advlist,autosave,visualblocks,example,syntaxhl",

	
		theme_advanced_buttons1 : "preview,fullscreen,code,|,undo,redo,|,bullist,numlist,justifyleft,justifycenter,justifyright,justifyfull,hr,|,link,unlink,syntaxhl,pasteword,table,media",
		theme_advanced_buttons2 : "fontselect,fontsizeselect,bold,italic,underline,strikethrough,forecolor,backcolor,|,hidebutton,example,image,emotions",
		theme_advanced_buttons3 : "",

		theme_advanced_fonts : "Tahoma=tahoma,arial,helvetica,sans-serif;"+
                "Times New Roman=times new roman,times;"+
				"layijisarangheyo_0=layijisarangheyo_0;"+
				"torsilp-gimchi=torsilp-gimchi;"+
				"layiji_tarminetine1=layiji_tarminetine1;"+
				"js-thanaporn=js-thanaporn;"+
				"iannnnnbkk=iannnnnbkk;"+
				"upcll1=upcll1;"+
				"can_rukdeaw=can_rukdeaw;"+
				"js-boaboon=js-boaboon;",

		theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "none",
		theme_advanced_resizing : false,
		theme_advanced_path : false,

		// Example content CSS (should be your site CSS)
		content_css : "../css/mainstyle.php?version=1.0",

		// Drop lists for link/image/media/template dialogs
		template_external_list_url : "lists/template_list.js",
		external_link_list_url : "lists/link_list.js",
		external_image_list_url : "lists/image_list.js",
		media_external_list_url : "lists/media_list.js"
	});

