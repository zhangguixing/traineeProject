package com.test;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

/**
 * 完成文件上传 （不是解析上传内容，因为上传内容 由fileUpload拦截器负责解析）
 * 
 * @author seawind
 * 
 */
public class UploadAction extends ActionSupport {

	private static final long serialVersionUID = 1L;
	// 接收上传内容
	// <input type="file" name="upload" />
	private File upload; // 这里变量名 和 页面表单元素 name 属性一致
	@SuppressWarnings("unused")
	private String uploadContentType;
	private String uploadFileName;

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public void setUploadContentType(String uploadContentType) {
		this.uploadContentType = uploadContentType;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	@Override
	public String execute() throws Exception {
		if (upload == null) { // 通过xml配置 required校验器 完成校验
		// 没有上传文件
			return NONE;
		}
		// 将上传文件 保存到服务器端
		// 源文件 upload
		// 目标文件
		File destFile = new File(ServletActionContext.getServletContext()
				.getRealPath("/upload") + "/" + uploadFileName);
		// 文件复制 使用commons-io包 提供 工具类
		FileUtils.copyFile(upload, destFile);
		return NONE;
	}
	
/*	private String fileDesc;
	private File file;
	private String fileFileName;// 命名要规范,前面是所上传文件后面是FileName,表示上传文件名
	private String fileContentType;// 同上上传文件类型
	//getter and setter
	public String execute() {
	    // 取到服务器上传文件存放的路径
	    String path = ServletActionContext.getServletContext().getRealPath(
	                "/Files/");
	    // 取到上传文件的完整路径
	    String FilePath = path + File.separator + fileFileName;
	    InputStream is = null;
	    OutputStream os = null;
	    try {
	        is=new FileInputStream(file);
	        os=new FileOutputStream(FilePath);
	        byte[] b=new byte[1024];
	        int len=0;
	        while((len=is.read(b))!=-1){
	            os.write(b,0,len);
	            os.flush();
	        }
	        is.close();
	        os.close();
	    } catch (FileNotFoundException e) {
	        e.printStackTrace();
	    } catch (IOException e) {
	        e.printStackTrace();
	    }
	    return "success";
	}*/
}
