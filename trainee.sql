/*
Navicat MySQL Data Transfer

Source Server         : xing
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : trainee

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2018-03-10 10:59:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for business
-- ----------------------------
DROP TABLE IF EXISTS `business`;
CREATE TABLE `business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of business
-- ----------------------------
INSERT INTO `business` VALUES ('1', 'business-1.jpg', '老板', 'admin', 'admin');
INSERT INTO `business` VALUES ('2', null, null, 'sdff', 'df');
INSERT INTO `business` VALUES ('4', null, null, null, null);
INSERT INTO `business` VALUES ('5', null, null, null, null);
INSERT INTO `business` VALUES ('6', null, null, null, null);
INSERT INTO `business` VALUES ('7', null, null, null, null);
INSERT INTO `business` VALUES ('8', null, null, null, null);
INSERT INTO `business` VALUES ('9', null, null, null, null);
INSERT INTO `business` VALUES ('10', null, null, null, null);
INSERT INTO `business` VALUES ('11', null, null, null, null);
INSERT INTO `business` VALUES ('12', 'face.png', 'xing', '', '2859763798@qq.com');
INSERT INTO `business` VALUES ('13', 'face.png', 'xing', '', '2859763798@qq.com');

-- ----------------------------
-- Table structure for b_notice
-- ----------------------------
DROP TABLE IF EXISTS `b_notice`;
CREATE TABLE `b_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) DEFAULT NULL,
  `message` text,
  `title` varchar(255) DEFAULT NULL,
  `business_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK27AAC15554F01D11` (`business_id`),
  CONSTRAINT `FK27AAC15554F01D11` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_notice
-- ----------------------------
INSERT INTO `b_notice` VALUES ('1', '2017-05-26 ', '企业个哦哦哦哦哦哦深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。 　　★深振业A:已与深圳投控签署本次重组的框架协议 　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。 　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌 　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。 　　★天海防务：正在筹划资产收购事项明起停牌 　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。 　　★宗申动力：拟10.5亿元收购大江动力 　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。 　　★新国都：拟7.1亿元收购嘉联支付 　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。 　　★滨海能源：实控人变更拟进一步增持并推动资产重组 　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。 深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。 　　★深振业A:已与深圳投控签署本次重组的框架协议 　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。 　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌 　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。 　　★天海防务：正在筹划资产收购事项明起停牌 　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。 　　★宗申动力：拟10.5亿元收购大江动力 　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。 　　★新国都：拟7.1亿元收购嘉联支付 　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。 　　★滨海能源：实控人变更拟进一步增持并推动资产重组 　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。 深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。 　　★深振业A:已与深圳投控签署本次重组的框架协议 　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。 　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌 　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。 　　★天海防务：正在筹划资产收购事项明起停牌 　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。 　　★宗申动力：拟10.5亿元收购大江动力 　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。 　　★新国都：拟7.1亿元收购嘉联支付 　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。 　　★滨海能源：实控人变更拟进一步增持并推动资产重组 　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。 深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。 　　★深振业A:已与深圳投控签署本次重组的框架协议 　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。 　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌 　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。 　　★天海防务：正在筹划资产收购事项明起停牌 　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。 　　★宗申动力：拟10.5亿元收购大江动力 　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。 　　★新国都：拟7.1亿元收购嘉联支付 　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。 　　★滨海能源：实控人变更拟进一步增持并推动资产重组 　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。 深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。 　　★深振业A:已与深圳投控签署本次重组的框架协议 　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。 　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌 　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。 　　★天海防务：正在筹划资产收购事项明起停牌 　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。 　　★宗申动力：拟10.5亿元收购大江动力 　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。 　　★新国都：拟7.1亿元收购嘉联支付 　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。 　　★滨海能源：实控人变更拟进一步增持并推动资产重组 　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。 深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。 　　★深振业A:已与深圳投控签署本次重组的框架协议 　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。 　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌 　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。 　　★天海防务：正在筹划资产收购事项明起停牌 　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。 　　★宗申动力：拟10.5亿元收购大江动力 　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。 　　★新国都：拟7.1亿元收购嘉联支付 　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。 　　★滨海能源：实控人变更拟进一步增持并推动资产重组 　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。 ', '企业公告', '1');
INSERT INTO `b_notice` VALUES ('3', '2017-06-01', '公司股东钥信信息本次计划采取集中竞价交易方式，减持总数不超过4,211,730股公司股份，即公司总股本2%。减持计划自公告披露之日起十五个交易日后的六个月内进行。', '数据港公告', '2');
INSERT INTO `b_notice` VALUES ('4', '2017-06-01', '深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。\r\n\r\n　　★深振业A:已与深圳投控签署本次重组的框架协议\r\n\r\n　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。\r\n\r\n　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌\r\n\r\n　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。\r\n\r\n　　★天海防务：正在筹划资产收购事项明起停牌\r\n\r\n　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。\r\n\r\n　　★宗申动力：拟10.5亿元收购大江动力\r\n\r\n　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。\r\n\r\n　　★新国都：拟7.1亿元收购嘉联支付\r\n\r\n　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。\r\n\r\n　　★滨海能源：实控人变更拟进一步增持并推动资产重组\r\n\r\n　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。\r\n盛和资源公告，截至公告日，公司股东巨星集团减持股份计划的减持期限已届满，未通过集中竞价交易方式减持盛和资源股份。此前，巨星集团计划通过上海证券交易所集中竞价交易，减持公司股份不超过700万股，即不超过公司总股本的0.5185%。', '盛和资源公告', '1');
INSERT INTO `b_notice` VALUES ('5', '2017-06-01', '深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。\r\n\r\n　　★深振业A:已与深圳投控签署本次重组的框架协议\r\n\r\n　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。\r\n\r\n　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌\r\n\r\n　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。\r\n\r\n　　★天海防务：正在筹划资产收购事项明起停牌\r\n\r\n　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。\r\n\r\n　　★宗申动力：拟10.5亿元收购大江动力\r\n\r\n　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。\r\n\r\n　　★新国都：拟7.1亿元收购嘉联支付\r\n\r\n　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。\r\n\r\n　　★滨海能源：实控人变更拟进一步增持并推动资产重组\r\n\r\n　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。\r\n深华发A11月21日晚间公告，公司股票近期价格跌幅较大，公司股票深华发A和深华发B将于11月22日起停牌，公司将进行自查。公司股票将不晚于11月29日复牌。11月以来，深华发A累计跌幅超三成。\r\n\r\n　　★深振业A:已与深圳投控签署本次重组的框架协议\r\n\r\n　　深振业A公告，公司已与交易对方深圳投控于11月21日签署了关于本次重组的框架协议，由公司向深圳投控发行股份购买资产的方式购买其所持有的部分股权及/或具备注入条件的科技园区等资产。公司将在2017年12月7日召开股东大会审议继续停牌事项，停牌时间自停牌首日起累计不超过6个月。\r\n\r\n　　★安泰科技：控股股东拟将钢研中铝稀土注入公司股票停牌\r\n\r\n　　安泰科技公告，接控股股东中国钢研科技集团有限公司的通知，正在筹划将其拥有的“山东钢研中铝稀土科技有限公司”的控股权注入本公司，自2017年11月22日上午开市起停牌。\r\n\r\n　　★天海防务：正在筹划资产收购事项明起停牌\r\n\r\n　　天海防务公告，正在筹划资产收购事项，标的资产为公司的关联企业，本次交易属于重大关联交易。公司股票于11月22日(星期三)上午开市起停牌，停牌时间不超过10个交易日。\r\n\r\n　　★宗申动力：拟10.5亿元收购大江动力\r\n\r\n　　宗申动力公告，公司拟以6.64元/股发行8697.29万股，并支付4.73亿元现金，合计作价10.5亿元，收购大江动力100%股权。大江动力主营通用汽油机及其终端产品，2018年-2020年承诺的净利润分别不低于7000万元、9800万元、1.26亿元。此次交易将进一步提升公司在通用动力设备方面的规模与市场占有率。\r\n\r\n　　★新国都：拟7.1亿元收购嘉联支付\r\n\r\n　　新国都与嘉联支付的唯一股东山南市敏思达技术有限公司签订股权转让协议，以现金人民币71,000万元收购嘉联支付有限公司100%股权。公司可以通过此次收购进入支付收单行业，是战略转型落地重要一步。嘉联支付承诺2018年度经审计的净利润不低于9,000万元，2018年度及2019年度两年合计经审计的净利润不低于19,000万元。公司股票11月22日起复牌。\r\n\r\n　　★滨海能源：实控人变更拟进一步增持并推动资产重组\r\n\r\n　　滨海能源公告，天津市政府授权天津市文改办替代天津市财政局履行出版集团出资人职责，因出版集团持有京津文化51%的股权，公司实控人由天津市财政局变更为天津市文改办，控股股东仍为京津文化。天津市文改办及出版集团未来12个月内有增持意向；有在未来12个月内改变公司主营或对公司主营作出重大调整，或通过公司购买或置换资产进行重组的意向。\r\n公司持股8.88%的公司股东国都景顺1号计划未来6个月内减持不超过5.03亿股，占公司总股本的比例为不超过6%。', '中弘股份公告', '1');
INSERT INTO `b_notice` VALUES ('6', '2017-11-23', '公司2017年实现营业收入5.18亿元，同比增长10.16%；净利润5,688.99万元，同比增长30.47%；基本每股收益0.551元。另外，公司拟向全体股东按每10股派发现金股利1.6元(含税)，同时每10股转增4股。', '海量数据披露年报', '1');
INSERT INTO `b_notice` VALUES ('7', '2017-11-23', '公司预计2018年一季度净利润为1237.05万元-1546.32万元，同比增长60%-100%。公司上年同期盈利773.16万元。报告期，公司主营业务持续向好，LED照明及充电桩业务实现较快增长。', '雪莱特披露业绩预告', '1');
INSERT INTO `b_notice` VALUES ('8', '2017-11-23', '，公司2017年实现营业收入5.18亿元，同比增长10.16%；净利润5,688.99万元，同比增长30.47%；基本每股收益0.551元。另外，公司拟向全体股东按每10股派发现金股利1.6元(含税)，同时每10股转增4股。', '海量数据披露年报', '1');
INSERT INTO `b_notice` VALUES ('10', '2018-03-10', '<p><span style=\"color: rgb(72, 72, 72); font-family: 宋体, Arial; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);\"> 证券代码：601216 &nbsp; &nbsp; &nbsp; 证券简称：君正集团 &nbsp; &nbsp; &nbsp; 公告编号：临2018-022号\r\n\r\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 内蒙古君正能源化工集团股份有限公司\r\n\r\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;重大资产重组进展公告\r\n\r\n &nbsp; &nbsp; &nbsp;本公司董事会及全体董事保证本公告内容不存在任何虚假记载、误导性陈述或者重大遗漏，并对其内容的真实性、准确性和完整性承担个别及连带责任。\r\n\r\n &nbsp; &nbsp;内蒙古君正能源化工集团股份有限公司（以下简称“公司”）因正在筹划重大事项，该事项可能涉及重大资产重组，经公司申请，公司股票已于2017年12月15日起停牌，并于2017年12月15日、12月19日披露了《君正集团重大事项停牌公告》（临2017-078号）和《君正集团重大资产重组停牌公告》（临2017-084号）。\r\n\r\n停牌期间，公司于2017年12月26日、2018年1月3日、1月10日披露了《君正集团重大资产重组进展公告》（临2017-088号、临2018-001号、临2018-006号）。\r\n\r\n &nbsp; &nbsp;因预计无法在停牌期满一个月内披露重大资产重组相关文件，根据《上市公司筹划重大事项停复牌业务指引》的有关规定，公司向上海证券交易所申请重大资产重组继续停牌，并于2018年1月13日披露了《君正集团重大资产重组继续停牌公告》（临2018-009号），公司股票从2018年1月15日起继续停牌不超过1个月。\r\n\r\n停牌期间，公司于2018年1月20日、1月27日、2月3日、2月10日，公司披露了《君正集团重大资产重组进展公告》（临2018-012号、临2018-014号、临2018-015号、临2018-016号）。\r\n\r\n &nbsp; &nbsp;2018年2月12日，公司召开第四届董事会第九次会议，审议通过了《关于公司重大资产重组继续停牌的议案》，同意公司向上海证券交易所申请股票自2018年2月15日起继续停牌，预计继续停牌时间不超过1个月。2018年2月14日，公司在上海证券交易所网站披露了《君正集团重大资产重组继续停牌公告》（临2018-018号），并于2018年2月28日披露了《君正集团重大资产重组进展公告》（临2018-020号）。\r\n\r\n &nbsp; &nbsp;截至本公告披露日，公司按照《上市公司重大资产重组管理办法》等相关规定，已聘请东兴证券股份有限公司为公司本次重大资产重组的独立财务顾问、北京国枫律师事务所为公司本次重大资产重组的专项法律顾问，并已着手对标的资产开展尽职调查；公司正在与交易各方及中介机构共同商讨、论证本次重大资产重组的交易方案。为保证公平信息披露，维护投资者利益，在停牌期间公司将根据有关事项进展情况及时履行信息披露义务，每五个交易日发布事项进展公告。\r\n\r\n &nbsp; &nbsp;公司指定信息披露媒体为《中国证券报》、《上海证券报》及上海证券交易所网站，有关信息均以上述指定媒体发布的公告为准，敬请广大投资者注意投资风险。\r\n\r\n &nbsp; &nbsp;特此公告。\r\n\r\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;内蒙古君正能源化工集团股份有限公司\r\n\r\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;董事会\r\n\r\n &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2018年3月7日</span></p>', '君正集团重大资产重组进展公告', '1');
INSERT INTO `b_notice` VALUES ('11', '2018-03-10', '<p>一、 监事会会议召开情况\r\n华夏幸福基业股份有限公司（以下简称“公司”）于 2018 年 1 月 6 日以电\r\n子邮件方式发出召开第六届监事会第七次会议的通知，会议于 2018 年 1 月 12\r\n日在佳程广场 A 座 7 层会议室以现场表决方式召开。本次会议应参与表决的监事\r\n3 名，实际参与表决的监事 3 名。本次会议由公司监事会主席常冬娟女士主持，\r\n董事会秘书列席了本次会议。会议的召集、召开及表决程序符合《中华人民共和\r\n国公司法》及《华夏幸福基业股份有限公司章程》的规定。\r\n二、 监事会会议审议情况\r\n(一)审议通过《关于使用部分闲置募集资金临时补充流动资金的议案》\r\n监事会认为：公司将部分闲置募集资金临时补充流动资金，有利于公司提高\r\n资金使用效率，降低公司财务费用，不存在变相改变募集资金用途和损害公司股\r\n东利益的情形，其决策程序符合相关法律、法规的规定，同意公司使用不超过\r\n28 亿元募集资金临时补充流动资金，使用期限自公司董事会审议通过之日起不\r\n超过 12 个月。\r\n 表决结果：3 票同意，0 票反对，0 票弃权。\r\n 具体内容详见公司于同日在上海证券交易所网站公告的临 2018-015 号公\r\n告。\r\n特此公告。\r\n华夏幸福基业股份有限公司监事会\r\n2018 年 1 月 13 日</p>', '第六届监事会第七次会议决议公告', '1');

-- ----------------------------
-- Table structure for b_recruitment
-- ----------------------------
DROP TABLE IF EXISTS `b_recruitment`;
CREATE TABLE `b_recruitment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `info` text,
  `business_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK579EA93F54F01D11` (`business_id`),
  CONSTRAINT `FK579EA93F54F01D11` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of b_recruitment
-- ----------------------------

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `message` text,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK78A7CC3B762B4443` (`teacher_id`),
  CONSTRAINT `FK78A7CC3B762B4443` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES ('2', '2018-03-10 10:49:20', '本视频学习PS入门视频', 'PS教程', null, '1', '1520650160633.mp4');
INSERT INTO `course` VALUES ('4', '2018-03-10 10:50:10', '了解基本linux命令', 'Linux教学', null, '1', '1520650210593.mp4');
INSERT INTO `course` VALUES ('5', '2018-03-10 10:51:07', 'python基础了解视频，适用于初学python者', '认识Python', null, '1', '1520650266679.mp4');
INSERT INTO `course` VALUES ('6', '2018-03-10 10:52:17', '学习web前端需要掌握的知识', 'Html+Css入门', null, '1', '1520650336805.mp4');

-- ----------------------------
-- Table structure for discussion
-- ----------------------------
DROP TABLE IF EXISTS `discussion`;
CREATE TABLE `discussion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) DEFAULT NULL,
  `info` text,
  `name` varchar(255) DEFAULT NULL,
  `message_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2A233828E73F9623` (`message_id`),
  CONSTRAINT `FK2A233828E73F9623` FOREIGN KEY (`message_id`) REFERENCES `s_message` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of discussion
-- ----------------------------
INSERT INTO `discussion` VALUES ('87', '2018-03-10', '<p>j</p>', '师', '32', 'teacher-1.jpg');
INSERT INTO `discussion` VALUES ('88', '2018-03-10', '<p>f</p>', '师', '32', 'teacher-1.jpg');

-- ----------------------------
-- Table structure for parent
-- ----------------------------
DROP TABLE IF EXISTS `parent`;
CREATE TABLE `parent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of parent
-- ----------------------------
INSERT INTO `parent` VALUES ('1', 'parent-1.jpg', '甲章', 'admin', '13242834392');
INSERT INTO `parent` VALUES ('2', null, null, null, null);
INSERT INTO `parent` VALUES ('3', null, null, null, null);
INSERT INTO `parent` VALUES ('4', null, null, null, null);
INSERT INTO `parent` VALUES ('5', null, null, null, null);
INSERT INTO `parent` VALUES ('6', null, null, null, null);
INSERT INTO `parent` VALUES ('7', null, null, null, null);
INSERT INTO `parent` VALUES ('8', null, null, null, null);
INSERT INTO `parent` VALUES ('9', null, null, null, null);

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', 'student-1.jpg', '兴跃', 'admin', 'admin', '13171861634');
INSERT INTO `student` VALUES ('2', null, null, null, null, null);
INSERT INTO `student` VALUES ('3', null, null, null, null, null);
INSERT INTO `student` VALUES ('4', null, null, null, null, null);
INSERT INTO `student` VALUES ('5', null, null, null, null, null);
INSERT INTO `student` VALUES ('6', null, null, null, null, null);
INSERT INTO `student` VALUES ('7', 'face.png', 'asfjidfs', '123456', '201565343', '18844543234');
INSERT INTO `student` VALUES ('8', null, 'lafasdlf', '123456', '201545673', '18832443544');
INSERT INTO `student` VALUES ('9', 'face.png', '23456', '123456', '201656789', '13156786678');

-- ----------------------------
-- Table structure for s_b_p_t
-- ----------------------------
DROP TABLE IF EXISTS `s_b_p_t`;
CREATE TABLE `s_b_p_t` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `tid` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_b_p_t
-- ----------------------------
INSERT INTO `s_b_p_t` VALUES ('1', '1', '1', '1');
INSERT INTO `s_b_p_t` VALUES ('2', '1', '1', '1');
INSERT INTO `s_b_p_t` VALUES ('3', '1', '1', '1');
INSERT INTO `s_b_p_t` VALUES ('4', '1', '1', '1');
INSERT INTO `s_b_p_t` VALUES ('5', '1', '1', '1');
INSERT INTO `s_b_p_t` VALUES ('6', '1', '1', '1');
INSERT INTO `s_b_p_t` VALUES ('7', '1', '1', '1');

-- ----------------------------
-- Table structure for s_message
-- ----------------------------
DROP TABLE IF EXISTS `s_message`;
CREATE TABLE `s_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) DEFAULT NULL,
  `message` text,
  `title` varchar(255) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6038843B658FF9A3` (`student_id`),
  CONSTRAINT `FK6038843B658FF9A3` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_message
-- ----------------------------
INSERT INTO `s_message` VALUES ('27', '2018-03-10', '<p><span style=\"color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">对于实习的地点，多少有些兴奋，就是****公司第一工程公司****公司，从小就在这个单位的院子里长大，看着它一点一点地随着时间而发生的改变，而且我父亲还在这里工作了二十几多年，因此我对于它的情况再熟悉不过了。****公司靠近铁路货站，可能是因为地理位置的优越型，涉及的业务几乎都是把从外地运进来的火车车皮进行装卸，再运输到客户所需的地点。业务很简单，会计业务流程不像工程局所投标的项目上的复杂。总的来说，****公司就以此为主营业务并经营至今。</span></p>', '3月6日 星期二', '1');
INSERT INTO `s_message` VALUES ('29', '2018-03-10', '<p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">今天是实习的第四天了，实习并没我想象的难。或许是我刚去吧，这几天一直都没有做什么很重要的事情，只是帮着林姐粘贴票据等原始凭证、整理些原始凭证之类。这与在学校里练习时粘贴凭证的方法和情况不太一样。在学校里练习时，都是将所得到的原始凭证直接粘贴到自己所作的会计凭证的背面;而在这里，都是先将原始凭证按日期摆放在一起，将它们按顺序用固体胶棒粘贴到一张大概有A4大小的原始凭证汇总表上，林姐还告诉我怎样贴才能使这些原始凭证粘的整齐又好看，而且使得汇总表的整张纸都被均匀贴满。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　在此之前，我一直都以为会计的实际操作会与学校里老师所教的、我们所见到的一模一样，我们所学的知识只是其中的一部分，许多东西并不是所想得那样一成不变，实际上，书本上的知识只是其中的一种，现实中所需要的会随着实际情况的变化而变化。</p><p><br/></p>', '3月8日 星期四', '1');
INSERT INTO `s_message` VALUES ('30', '2018-03-10', '<p><span style=\"color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">经过上周的了解，我大概知道了公司的基本运作。我在学校里也学过一些与会计电算化相关的软件知识，还考了用友的财务软件-U8证书。因此，学习在网上进行帐务处理并不是很困难，而且觉得它们之间有很多的相似性，只是一个是单机操作，而另一个是通过网络保存。由于刚过完年不久，公司的业务也不是很多，林姐也不是很忙，就很耐心的教我，如：三大凭证：收款凭证、付款凭证和转帐凭证的科目如何在网上进行输入和保存，登记凭证的增加、删除和修改，如何将已经录入的凭证从网上调出来并察看其相关内容等等。</span></p>', '3月13日 星期二', '1');
INSERT INTO `s_message` VALUES ('31', '2018-03-10', '<p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　由于公司的经营规模小，人员设置简单，因此业务也少，没有什么特别的了，我在****公司实习也快一个月了，每天的工作内容都大致相同。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天，我准时到了办公室，林姐已经到了那里了，她说我们今天就学习使用打印机吧。虽说以前也见过一些，但打印机分许多种，原理都差不多，我见办公室里的打印机是一台针式打印机，因为公司小，而且资金也不是很宽裕，所以就只有这一台打印机。打印机很小，就放在电脑旁边的桌子上，林姐说我们就把这个月已经做好的凭证打印出来吧，于是她打开公司的网站，把以前保存好的凭证调出来，她说，第一次一定要把所需的数据设好，否则以后会很麻烦的，她还告诉我，她就是没有设置好凭证打印时的边距，虽然不是什么大问题，但是就是这么一个小问题，我们两个人没打印一张凭证都要输入一次边距。</p><p><br/></p>', '3月26日 星期一', '1');
INSERT INTO `s_message` VALUES ('32', '2018-03-10', '<p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天是我实习的第一天，经理主要是让我们熟悉产品。第一次接触全英文的产品的确非常的不熟悉，感觉无从下手，我用了基本上一天的时间来看我们公司的产品册。通过不断的看产品册，对产品有了个大概的了解。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　同时，经理带着我熟悉了下办公环境，我对公司的工作环境非常的满意。就这样我开始了我的第一份工作。很兴奋，也很期待。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天对我来说最大的收获就是开始了我的上班生涯，感觉非常的兴奋。在一天的工作中，我对商务上的英语有了一定的认识，很多产品用的都不是某个单词的本意，而是引申意，这点让我在认识产品的时候非常的困难。还好有经理的帮忙。我从事的这个工作在某些方面来说是非常枯燥的，每天7个小时都盯在电脑上，眼睛非常的累。但是我相信我能坚持下去。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天我们开始认识外贸操作平台，经理介绍到，现在的主流外贸平台有Alibaba，Made-In-China，Globalsource等等，我们用的是Alibaba，我们的任务就是熟悉这个操作平台，熟悉它的流程还有方式，经理还给我们讲解了各个部分都是干什么用的，哪个是用来上传产品的，哪个是用来查看本行业的进出口信息的。最后经理让我们自己熟悉下，随便看看，了解它的大环境，为后来的工作打下基础。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天我才发现原来做外贸是在阿里巴巴上面做，整的跟淘宝似的。只不过原先在淘宝上我是买家，现在变成了卖家了。感觉眼花缭乱的，不过令我欣慰的是，至少里面还有点中文，我看还是中文的舒坦啊。外国人要是全用中文谈业务那该有多好啊。我们的国家赶紧发展壮大吧，以后让所有的外国人都来学习中文。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天我的主要任务是上传产品，通过阿里巴巴平台把我公司的产品上传上去，并在平台上展示出来，以便使家方便看到。经理给了我三个产品让我先熟悉下，并参考其他公司上传的内容把这三个也上传上去，通过比较，我渐渐的掌握了上传的方式和内容。有个操作平台做起工作来就是方便，这样做起贸易来确实是方便了很多。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天我最大的收获是知道了怎么上传产品，原来现在的外贸是这么来做的啊，我还以为做外贸是一个非常非常困难的工作呢。看来自从有了商务平台之后外贸工作简单了很多。通过上传产品来熟悉业务是我当前的工作，同时，也不能忽视了外贸函电的写作，因为马上就得用上了。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　计算机维护实习日记</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　20xx年3月1日星期一晴</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　一想到昨天接到鞍山新龙高新科技有限公司的电话通知我去实习，就觉得非常的开心，在经过几次面试的失败后，我终于通过面试了。竟是第一份实习工作，无论如何一定要把它做好，而且每个公司都不希望自己的员工迟到懒散，所以今天一大早就去鞍山新龙高新科技有限公司报到了。初次来到这个地方，开心激动的心情来迎接我的这份实习生涯。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　随后由公司人事部做了入职培训，期间了解了办理入职手续的流程;熟悉了公司的制度以及公司内网和公司系统的使用。在办理了一系列入职手续。入职手续办理妥当后领到工卡，然后大姐就带着我去熟悉下公司环境，并和其他部门主管谈了话，明确了自己的工作时间和工作任务后，就回到了自己的工作的地方整理下东西，并去主管那领了电话，笔记本电脑和一些文化用品后，把工作要用到的一些软件装完后，还给了我一些文件让我浏览阅读，并让我了解公司的工作流程及详细情况，第一天的实习就这样度过了。　会计事务所实习日记</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　20xx.1.14(实习日记一)</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　今天是实习的第一天，上午办完报到入职手续之后马上就被带到了所属部门开始工作了。总的来说工作很轻松，希望以后能学到更多的东西吧。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　首先说一说入职过程。按邮件的通知的上午九点，我提前10分钟到达了事务所，找到HR姐姐，似乎没有被很热情的对待，查个信息都让我站着等了很久，不过也可以接受，毕竟是个小实习生，无论做什么都是在拜托别人办事情。还好后面一直带我到处办手续的姐姐很不错，稍微改善了我的印象。和我一起办入职手续的还有一个吉大的女研究生姐姐，刚下火车就风尘仆仆赶过来，住的地方都没安顿好，瞬间又觉得自己很幸运。我们一起填了一些表格，签了合同，实习工资一天只有六十，比预期的要少，但是怀着学东西长经验的态度过来也就能接受了，之后领了电脑，做了一个简单的测试，然后给电脑连上网就算是入职了。后来她被分到了审计三部，而我被分到了质监部，没有如想象的分到审计项目上，而且一开始都不知道质监是干嘛的就被部门的姐姐带到了工作岗位。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　到了质监部后发现有两个女生已经在实习了，很快互相认识了一下，他们都是外地的学校来的，一个大二的西安小妹妹托她哥哥的关系进来的，一个和我一样大三的女生，来自吉林。这时候突然感觉自己头上的大学的招牌一文不值，找找实习期间投出去那么多简历，那么多实习单位需要人，而我还是凭着同学姐姐的关系才坐在这里，究竟问题出在哪里呢。马上部门的员工发给我一些文件让我自己先看看，慢慢了解了质监部门的工作，总的来说就是审核审计部门出具的审计报告吧。势必会枯燥无聊，这个是有心理准备的，慢慢看下来，发现很多眼熟的东西，似乎在课本上见到过，有了一些亲切感和底气。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　中午和两个女生去吃饭，附近的选择不多，价钱也不便宜，果然是出来了才能感受到食堂的好。在这边吃饭，味道和价格都不是太大的问题，最担心的是卫生，看着店里攒动的人头和忙碌的服务员，吃着东西感觉胃部一阵涌动，唉我是有洁癖吗。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　吃完饭还可以午休一会儿，前一天晚上没睡好导致我一下午休过头了，超过半小时才被员工姐姐叫醒，还挺不好意思的。睡眼朦胧而且神智还没完全恢复过来的时候又有新的任务分配下来了，这次是要试着审核一份审阅报告，员工姐姐在我们面前很炫酷地演示了一把怎样用excel核对数据，很幸运她是用我的电脑演示的，后面学着做的时候也方便很多。之后整个下午都在看这份审阅报告，先核查了数据，自己用excel做了一遍，大功告成之后非常有成就感。后来几个员工姐姐又过来给了我们一些指导和示例，然后我才发现核查数据原来只是审核工作的一小部分，其他的譬如报告的格式、报告的内容语句措词等等都是需要审核的，而且是对照着一份长达几百条的细则核对，任务是很艰巨的。接着又审核完几个财务报表后，看表的过程中深深感觉到自己的会计知识没掌握好，对财务报表的勾稽关系和一些规则都没清晰的概念，作为一个人大的会计学生实在汗颜。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　到五点半我们就准时下班了，坐地铁不到半小时就回到了学校，这就是没出项目而是在内部部门的好处，年前不用加班，而且在事务所上班离学校近。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\">　　总一下今天的收获：一是这次算是真正跨入社会的第一步吧，没有爸爸妈妈的庇护，凡事都要靠自己。算是尝到了一点世间的冷暖，也算是实地感受到了“关系”的作用和威力，没关系的做什么事情都要看人家脸色任由人家的喜恶，有关系的很多时候能大开绿灯还能得到很多免费帮助。这次经历我算是沾了一点关系的光，但只是给了我一个通行证，以后怎样靠自己实力说话吧。二是进入到一个陌生的环境要从头开始和身边的人相处，HR姐姐，部门上面的员工姐姐们，一起工作的实习生，甚至是门口管门禁系统的保安大叔。一直以来新的环境对我来说都是不舒适的，大家都客客气气的，谁也不知道对方的真实想法，说出一句话前要思考，得到反馈后要体会，比起和熟悉的人交流累很多，但在这种状态下逼迫自己去适应也是一种锻炼和成长吧。三是多了一次审视自己的机会，自己头上的名校光环，自己真实的能力，自己在这个社会中能立于何种位置。这些还需要在后面的实习中多多感受吧，感受自己做得怎么样，思考什么能让我和别人不一样，给自己一些肯定和动力。最后就是今天学到的一些专业的知识，算是初窥了审计的实务工作，虽然做的一些枯燥重复的工作，自己去发掘值得学习的点吧。</p><p style=\"margin-top: 0px; margin-bottom: 1em; padding: 0px; vertical-align: baseline; color: rgb(102, 102, 102); font-family: Arial, Helvetica, &quot;Microsoft YaHei&quot;, STHeiti, &quot;Droid Sans Fallback&quot;, sans-serif; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);\"><br/></p><p><br/></p>', '商务英语实习日记', '1');
INSERT INTO `s_message` VALUES ('33', '2018-03-10', '<p><span style=\"color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, SimSun, arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">今天暑假就是大三毕业，所以学校提前一个月放假，让我们实习。因为我不喜欢当老师，所以就没有留在学校，而是回了家。心事在外面找了几天工作，发现太难了。就准备去亲戚家的外贸公司实习一个月。进公司之前，先看了些关于外贸方面的书，又上网查看了关于次方面知识的有关信息。毕竟我学的专业不是外贸。 　　说实在的，外贸其实是一个要细心的行业。不管是填单，写商务信函，找客户或进行商务谈判，这些都需要一定的技巧。因此在这段实习期，我一定要向公司的同事们好好学习</span><br/></p>', '外贸实习日记 ', '1');
INSERT INTO `s_message` VALUES ('34', '2018-03-10', '<p><span style=\"color: rgb(51, 51, 51); font-family: &quot;Microsoft YaHei&quot;, SimSun, arial, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">　　听说要去移动东井亭参观，而且还可以坐校车去，对于从未坐过校车的我们来说，情绪都很高亢。虽说老师指令我们7点20就要到南二广场结合，8点就要开始参观。但是大家各个都很准时到那里结合，平日里这个点正在做梦的同学们也乖乖的过来了，充满着激情。7点10分南二广场已经站满我们的人，大家都买好早饭带着准备坐车上吃，但中途出现了问题，班车误点，9点才到移动。 　　到了移动东井亭，大家都很高兴，估计自己的未来可能就在移动工作，可以提前来感受一下移动的设备，技术。我们在老师的指导下，我们来到3楼机房，看到了满层楼都是交换机，可算是大开眼界了，这么多的设备，我们就邪恶了一下，要是没有这么多空调设备，这里岂不是成了火炉了。技术人员把我们带到一处交换机就开始给我们讲这个交换机的东西，说软交换的技术比较高端，普及运用等等。 　　之后，我们来到了6楼楼顶，信号发生器。虽然大家都不怎么懂原理，可是大家都很HIGH，这就是技术。等所有人都参观完了，我们就下楼了，回到车上，开开心心的回去了。 　　下午，我们参加了通信讲座，这个讲座基本和周一早上参观的通信展览馆差不多，巩固了一遍我们的对通信发展史的了解，老师讲的也比较生动有趣，我们各个听的也比较愉快。一个小时很快过去，我们晚上回到宿舍，很多人就开始打开电脑，对移动的设备百度了一下，好奇心的同时又在学习··· 　　第三天 　　今天依然是出学校参观，今天我们参观的是南邮本部(三牌楼)，我们这届到了大四有可能搬到那里去，所以大家都很好奇那里到底是什么样子。都知道那里的校区很老，设备差， 　　地方小，当车开到东门的时候，我们朝着校园里一齐望去，感觉到有种大学底蕴的味道。下了车后，我们顺着路线，看着校园的环境，学长学姐们的气质，深深的感觉到这里学术风浓厚。 　　来到了科技楼，我们参观了，卫星通信站，在里面看到好多的信号发射器，而且学到了很多通信知识，了解到我们日常手机通信的发射模式。图像实验室里面里面的技术也不逊色，各种图像处理分析，技术型也很强。微波暗室里面的只要把门一关，所有的信号全部屏蔽，很封闭的一个暗室，第一次见到过这种技术场合。光网络实验室，S-1240机房，软交换实验室，广电实验室，TD-SWCDMA 技术，校园网设备处等等好多展览实验室，顿时感觉到自己的母校原来这么厉害，真的见识到了， 原来只是听说，今天真的见识到了真正的技术。 　　下午，我们把所有的都参观完了，本周的认识实习基本接近尾声，在老师的带领下，最后老师总结了一下，我们的认识实习到此就结束了，更多的知识等着我们未来慢慢去学习，通信行业的未来就看我们的今天怎样的努力。 　　总结 　　认识实习周是我们上大学以来最有实践意义的一周。这周，让我们接触了很多设备，仪器。自己的身心精神层面得到了提高。从好奇到实践，从未知到了解，更加认识到学习的重要性，科学技术是第一发展力，扎实学好书本知识到最后的学以致用。</span><br/></p>', '认知实习日记', '1');

-- ----------------------------
-- Table structure for s_registration
-- ----------------------------
DROP TABLE IF EXISTS `s_registration`;
CREATE TABLE `s_registration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKA8C4E505658FF9A3` (`student_id`),
  CONSTRAINT `FKA8C4E505658FF9A3` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_registration
-- ----------------------------

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES ('1', 'teacher-1.jpg', '师', 'admin', 'admin');
INSERT INTO `teacher` VALUES ('2', null, null, 'kkkk', 'fasd');
INSERT INTO `teacher` VALUES ('3', null, null, null, null);
INSERT INTO `teacher` VALUES ('4', null, null, null, null);
INSERT INTO `teacher` VALUES ('5', null, null, null, null);
INSERT INTO `teacher` VALUES ('6', null, null, null, null);
INSERT INTO `teacher` VALUES ('7', null, null, null, null);
INSERT INTO `teacher` VALUES ('8', null, null, null, null);
INSERT INTO `teacher` VALUES ('9', null, null, null, null);
INSERT INTO `teacher` VALUES ('10', null, null, null, null);

-- ----------------------------
-- Table structure for t_notice
-- ----------------------------
DROP TABLE IF EXISTS `t_notice`;
CREATE TABLE `t_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) DEFAULT NULL,
  `message` text,
  `title` varchar(255) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK757FE903762B4443` (`teacher_id`),
  CONSTRAINT `FK757FE903762B4443` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_notice
-- ----------------------------
INSERT INTO `t_notice` VALUES ('1', '2017-05-26', '老师的公告', '老师的公告', '1');
INSERT INTO `t_notice` VALUES ('2', '2017-06-01', '第二条', '第二条', '1');
INSERT INTO `t_notice` VALUES ('4', '2017-06-01', '发生大', '大师傅', '2');
INSERT INTO `t_notice` VALUES ('5', '2017-06-01', 'dkdk', '测试用例', '1');
INSERT INTO `t_notice` VALUES ('6', '2017-11-24', '<p>以太一台晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕晕<br/></p>', '刘琳刘琳绿绿绿绿绿绿绿绿绿', '1');
INSERT INTO `t_notice` VALUES ('7', '2017-11-24', '<p>凄凄切切群群群群群群群群群群群群群群群群群群群群群群群群群群群群群<br/></p>', '凄凄切切群群群群群群群群', '1');
INSERT INTO `t_notice` VALUES ('8', '2017-11-24', '<p>呃呃鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅鹅<br/></p>', '呜呜呜呜无无无无无无无无', '1');
INSERT INTO `t_notice` VALUES ('9', '2017-11-24', '<p>吞吞吐吐拖拖拖拖拖拖拖拖拖拖拖拖拖拖拖拖拖拖<br/></p>', '柔柔弱弱若若若若若若若若若若', '1');
INSERT INTO `t_notice` VALUES ('10', '2017-11-24', '<p>发热发热爱上<br/></p>', '一月又一月晕晕晕晕晕晕', '1');
SET FOREIGN_KEY_CHECKS=1;
