package com.trainee.talking;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class Test01 {
	public  Object getName(String ip) throws UnknownHostException {
		InetAddress addr = null;
		String address = "";
		try {
			// cp01-fengchao-public-7.epc.baidu.com|10.95.130.73
			addr = InetAddress
					.getByName(ip);
			//ip = addr.getHostAddress().toString(); // 获得机器IP　　
			address = addr.getHostName().toString(); // 获得机器名称
			System.out.println(ip + "|" + address);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return address;
	}
}