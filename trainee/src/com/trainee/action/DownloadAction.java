package com.trainee.action;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.convention.annotation.Action;
import org.apache.struts2.convention.annotation.Namespace;
import org.apache.struts2.convention.annotation.ParentPackage;
import org.apache.struts2.convention.annotation.Result;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

@SuppressWarnings("all")
@Namespace("/Functionality")
@ParentPackage("mystruts")
@Scope("prototype")
@Controller
@Result(name = "login", location = "/Functionality/shenfen.jsp")
public class DownloadAction extends BaseAction {

	private InputStream attachstream;
	// 文件名称
	private String fileName;

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	@Action(value = "download", results = { @Result(name = "download", type = "stream", params = {
			"contentType", "application/octet-stream", "inputName",
			"attachstream", "contentDisposition",
			"attachment;filename=\"${fileName}\"", "bufferSize", "4096" }) })
	public String toDownload() {
		return "download";
	}
	public InputStream getAttachstream() {
		String path = ServletActionContext.getServletContext().getRealPath(
				"/upload/" + fileName);// fileName是页面传过来的参数
		try {
			attachstream = new FileInputStream(path);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return attachstream;
	}

	public void setAttachstream(InputStream attachstream) {
		this.attachstream = attachstream;
	}

}