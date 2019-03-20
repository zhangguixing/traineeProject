QingEditor.lang({
	source : 'HTML代码',
	selectall : '全选(Ctrl+A)',
	justifyleft : '左对齐',
	justifycenter : '居中',
	justifyright : '右对齐',
	justifyfull : '两端对齐',
	insertorderedlist : '编号',
	insertunorderedlist : '项目符号',
	indent : '增加缩进',
	outdent : '减少缩进',
	subscript : '下标',
	superscript : '上标',
	formatblock : '段落',
	fontname : '字体',
	fontsize : '文字大小',
	forecolor : '文字颜色',
	hilitecolor : '文字背景',
	bold : '粗体(Ctrl+B)',
	italic : '斜体(Ctrl+I)',
	underline : '下划线(Ctrl+U)',
	strikethrough : '删除线',
	removeformat : '删除格式',
	image : '图片',
	table : '表格',
	hr : '插入横线',
	emoticons : '插入表情',
	link : '超级链接',
	unlink : '取消超级链接',
	fullscreen : '全屏显示',
	about : '关于',
	lineheight : '行距',
	clearhtml : '清理HTML代码',
	pagebreak : '插入分页符',
	quickformat : '一键排版',
	insertfile : '插入文件',
	template : '插入模板',
	anchor : '锚点',
	yes : '确定',
	no : '取消',
	close : '关闭',
	editLink : '超级链接属性',
	deleteLink : '取消超级链接',
	editAnchor : '锚点属性',
	deleteAnchor : '删除锚点',
	noColor : '无颜色',
	invalidImg : "请输入有效的URL地址。\n只允许jpg,gif,bmp,png格式。",
	invalidUrl : "请输入有效的URL地址。",

}, 'zh-CN');

QingEditor.options.langType = 'zh-CN';


			var editor;
			QingEditor.ready(function(K) {
				editor = K.create('textarea[name="'+textarea_name+'"]', {
					resizeType : 1,
					allowPreviewEmoticons : false,
					allowImageUpload : false,
					items : [
						'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
						'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
						'insertunorderedlist', '|', 'emoticons', 'image', 'link']
				});
			});