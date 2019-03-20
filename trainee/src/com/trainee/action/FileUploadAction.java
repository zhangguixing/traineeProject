package com.trainee.action;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Date;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.Result;
import org.apache.struts2.convention.annotation.Results;

import com.trainee.domain.Course;
import com.trainee.domain.Teacher;
import com.trainee.utils.Identity;

@Namespace(value = "/Functionality")
@Action("fileUpload")
@InterceptorRefs(value = { @InterceptorRef("fileUploadStack") })
@Results({ @Result(name = "success", location = "/Functionality/showFile", type = "redirect") })
public class FileUploadAction extends BaseAction {
	private static final long serialVersionUID = 572146812454l;
	private static final int BUFFER_SIZE = 16 * 1024;
	// 封装上传文件域的属性
	private File upload;
	// 封装上传文件类型的属性
	private String contentType;
	// 封装上传文件名的属性
	private String fileName;
	private String storageFileName;
	// 上传的真实路径
	private String realPath;
	// 课程名
	private String name;

	// 封装对上传文件的介绍
	private String message;

	// private String storagePath;

	// since we are using <s:file name="upload" ... /> the File itself will be
	// obtained through getter/setter of <file-tag-name>

	public File getUpload() {
		return upload;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTrueName() {
		return realPath;
	}

	public void setTrueName(String trueName) {
		this.realPath = trueName;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	// since we are using <s:file name="upload" .../> the file name will be
	// obtained through getter/setter of <file-tag-name>FileName
	public String getUploadFileName() {
		return fileName;
	}

	public void setUploadFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getStorageFileName() {
		return storageFileName;
	}

	public void setStorageFileName(String storageFileName) {
		this.storageFileName = storageFileName;
	}

	// since we are using <s:file name="upload" ... /> the content type will be
	// obtained through getter/setter of <file-tag-name>ContentType
	public String getUploadContentType() {
		return contentType;
	}

	public void setUploadContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public void copy(File src, File dst) {
		try {
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new BufferedInputStream(new FileInputStream(src), BUFFER_SIZE);
				out = new BufferedOutputStream(new FileOutputStream(dst), BUFFER_SIZE);
				byte[] buffer = new byte[BUFFER_SIZE];

				while (in.read(buffer) > 0) {
					out.write(buffer);
				}
			} finally {
				if (null != in) {
					in.close();
				}
				if (null != out) {
					out.close();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static String getExtention(String fileName) {
		int pos = fileName.lastIndexOf(".");
		return fileName.substring(pos);
	}

	@Override
	public String execute() throws Exception {
		storageFileName = new Date().getTime() + getExtention(fileName);
		realPath = ServletActionContext.getServletContext().getRealPath("/upload");
		File storageFile = new File(realPath + "/" + storageFileName);
		File file = new File(realPath);
		if (!file.exists()) {
			file.mkdirs();
		}
		copy(upload, storageFile);
		saveCourse();
		return SUCCESS;
	}

	/**
	 * 保存数据
	 */
	public void saveCourse() {
		Identity identity = (Identity) ServletActionContext.getRequest().getSession().getAttribute("identity");
		Teacher teacher = courseService.findById(identity.getUserId());
		Course course = new Course();

		course.setDate(new Date());
		course.setName(name);
		course.setMessage(message);
		course.setFileName(storageFileName);

		course.setTeacher(teacher);

		courseService.save(course);

	}

}