package com.trainee.action;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.InterceptorRef;
import org.apache.struts2.convention.annotation.InterceptorRefs;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.trainee.domain.Business;
import com.trainee.domain.Parent;
import com.trainee.domain.Student;
import com.trainee.domain.Teacher;
import com.trainee.utils.Identity;

@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
@InterceptorRefs(value = { @InterceptorRef("fileUploadStack") })
public class ImageUploadAction extends BaseAction {
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
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public File getUpload() {
		return upload;
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
				in = new BufferedInputStream(new FileInputStream(src),
						BUFFER_SIZE);
				out = new BufferedOutputStream(new FileOutputStream(dst),
						BUFFER_SIZE);
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

	@Action(value = "imageUpload",results={@Result(name="success",location="/Functionality/getUserInfo",type="redirect")})
	public String imageUpload() throws Exception {
		if (upload != null) {
			Identity identity = (Identity) ServletActionContext.getRequest()
					.getSession().getAttribute("identity");
			storageFileName = identity.getUserType() + "-" + id
					+ getExtention(fileName);
			realPath = ServletActionContext.getServletContext().getRealPath(
					"/images");
			File storageFile = new File(realPath + "/" + storageFileName);
			File file = new File(realPath);
			if (!file.exists()) {
				file.mkdirs();
			}
			copy(upload, storageFile);
			updateUserImage(identity, storageFileName);
		}
		return "success";
	}

	/**
	 * 更新用户头像信息
	 * 
	 * @param identity
	 *            身份信息
	 * @param imageName
	 *            头像名称
	 */
	private void updateUserImage(Identity identity, String imageName) {
		if (identity.getUserType().equals("student")) {
			Student student = new Student();
			student.setId(identity.getUserId());
			student = userService.search(student);
			if (student.getImage().equals("face.png")) {
				student.setImage(imageName);
				identity.setUser(student);
				userService.update(student);
			}
		} else if (identity.getUserType().equals("teacher")) {
			Teacher teacher = new Teacher();
			teacher.setId(identity.getUserId());
			teacher = userService.search(teacher);
			if (teacher.getImage().equals("face.png")) {
				teacher.setImage(imageName);
				userService.update(teacher);
				identity.setUser(teacher);
			}
		} else if (identity.getUserType().equals("business")) {
			Business business = new Business();
			business.setId(identity.getUserId());
			business = userService.search(business);
			if (business.getImage().equals("face.png")) {
				business.setImage(imageName);
				userService.update(business);
				identity.setUser(business);
			}
		} else if (identity.getUserType().equals("parent")) {
			Parent parent = new Parent();
			parent.setId(identity.getUserId());
			parent = userService.search(parent);
			if (parent.getImage().equals("face.png"))
				parent.setImage(imageName);
				userService.update(parent);
				identity.setUser(parent);
		}
		ServletActionContext.getRequest().getSession().setAttribute("identity", identity);
	}
}
