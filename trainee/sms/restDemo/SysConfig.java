package restDemo;

import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * 读取配置文件config.properties的内容
 */
public class SysConfig {

	public static final String ENCODING = "UTF-8";
	public static final String CONFIG_PATH = "/config.properties";

	private Properties props = null;// config.properties
	private static Logger log = Logger.getLogger(SysConfig.class);

	/**
	 * 获取全局唯一的SysConfig 对象
	 * @return
	 */
	public static SysConfig getInstance() {
		SysConfig config = ConfigHolder.INSTANCE.getConf();
		config.init();
		return config;
	}

	/**
	 * 初始化
	 */
	private void init(){
		props = new Properties();
		loadConfigProps();
	}

	/**
	 * 加载配置文件
	 */
	public void loadConfigProps() {
		InputStream is = null;
		try {
			is = getClass().getResourceAsStream("/config.properties");
			props.load(is);
		} catch (IOException e) {
			e.printStackTrace();
			log.error("load config.properties error!please check the file!", e);
		} finally {
			if (is != null) {
				try {
					is.close();
					is = null;
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}

	public String getProperty(String key) {
		String tmp = props.getProperty(key);
		if (StringUtils.isNotEmpty(tmp)) {
			return tmp.trim();
		}
		return tmp;
	}

	public boolean getPropertyBoolean(String key) {
		String tmp = props.getProperty(key);
		if (StringUtils.isNotEmpty(tmp)) {
			return Boolean.parseBoolean(tmp.trim());
		}
		return false;
	}

	public int getPropertyInt(String key) {
		String tmp = props.getProperty(key);
		if (StringUtils.isNotEmpty(tmp)) {
			return Integer.parseInt(tmp.trim());
		}
		return 0;
	}



	enum ConfigHolder {
		INSTANCE;
		SysConfig conf;

		ConfigHolder() {
			conf = new SysConfig();
		}
		public SysConfig getConf(){
			return conf;
		}
	}

	public static void main(String[] args) {

		System.out.println(getInstance().getProperty("rest_server"));

	}



}
