//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/200_define_global.b2link.ip.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.ip;

global.b2link.ip = global.b2link.ip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.ip;

/**
 * @function
 * @param {String} ip
 * @return {Boolean}
 */
//!function(){var V=JSON.parse(Lib.Ttw.abt("VjJ4b2MxTnRWa1ppU0VacFRUSm9UbFZVUW5kbGJHeHhVMnM1YUZJd2NFbFpWV2hoWVdzd2VGSnVRbFZOYmtKSFdYcENjMk5XU2xsaVJUbHNWa1pKZWxaRlpIZFJiVkpXVFZaU1ZGWkdjRTlXVkU1clkwWlJlV05JV214U1YzaDRXV3BPYjFSV1JYZGhla3BWVFdwRk1GcEhlSEpsVmtwMVZHMW9VMlZ0ZHpKWGExWlBVMnMxY2sxV1VtdE5iWGhSV1Zjd05VNUdVbGhqUjNCclZsUkdSVlJyYUd0VVYwWnlWbTVDVlUxdVFrZFpla0p6WTFkS05sZHRSbWxXYmtJd1ZqSXhkMlJ0VmtabFNFWlVWMGRvVDFsV1VsSmxiRkpYVkZSQ1QxWlViRVZWTVZKaFZHeFZlbHBJUWxWTmJrSXpXV3hhZDJSR1pIUk5Wa0pvWVRGWmVGWkdaSGRTYlZaV1pVaEdXazB5YUU1WlZ6RjZUVlpPV0dOSVdtdE5TR2hGVlRGb2MxUnRSbkppUkVaVlZqTkNUMVJzVmpSalZrcFpXa1V4YUdFeFdUQldSM2hQVTJzMWNrMVZVbXROYlhoUFdWZDBjMDVXVWtoalJYQnNZWHBzVlZScmFHOVViRVkyVldwU1ZWWnNTbUZaVmxVMVkxWkdXVlJyY0doaE1uY3hWa1prY2sxSFZsWk5WRnBvVFRGYVQxWnJWa2ROVmxKWFZXdHdhMDFIZUhoWmFrNXJWRlpGZDJKRVZsVldNMEpMV2taVmVHTldVbFZXYXpGb1lURlplbFpGWkhkU2JWWldUVlpTVkZaR2NGaFpiR2hEVkVaU1ZsZHNjR3hXYTNCYVdXdGFVMWRHU1hwaFJsWlhZV3RLY2xScldscGxSMHBIVm14U2FWWkhlSGhXYlRFMFZqQXdlR0pHV2xkaGVteHZWVzEwZDJWc1dYbGpSV1JZWVhwR1NGa3dhRXRYYkZsNllVZG9WMkpZUWt4VVZWcGFaVlpLV1dKR1VsaFNNMmhWVm1wQ2EwNUdXWGhpUmxaVVlsUnNjVlp0ZUZkTk1XeFdWbXM1YUZKcmNIcFdNbkJIVjJzeFIyTklTbHBXTTJob1ZtMXdTMDFHV1hsU1dHeFVWMGQ0VkZZd1pEUldNV3hWVTIwNWFsWnNWak5aVlZaUFlVWktjMWRxUmxwTlJuQnlXVmQ0WVZacVNqQldNa1Y1VTFoc1UxZEhlRmRaVkVwdlkxWlZkMkZGVG1oU2JGb3hXVEJhYTJGc1ZqSjBWMkV5U1hsU1dHeFdZVEpvY1ZVd2FFTmhSbFoxWTBaa2FsWnRlRmxVYkZVMVZHc3hjbUl6Y0ZaU2JFWXpWVVpGT1ZCUlBUMD1XblJsUm14VllrWlZNVlpIYzNoamJVbDZZMFphVTJKRldYcFdWVnBHVDFaQ1VsQlVNRDFrUjFaSFlrWldhVkpzVlhoV2EyUjZaVWRPZEZOWWNHcFNiSEJVV1d0V1dtVnNXbFpYYTFwUVZtdEtVMVZHVVhkUVYxSklWbXRrYVZKc1duQlZiWGhXWlVaYWNscEljR3hTTURVd1ZURm9kMkZzU25OalJsSmFZVEZhWVZwWGVHRldiR1J5VjJ4Q1YyRXdjRlJXVlZwU1pERkNXRlZyYUZkaE1sSndWVzE0WVdOR1ZuUmxSbHBzVW14d2VWZHJhSGRpUmtsM1RsUkNWazFYYUROWlYzaExZekpPUjFWc2NHaE5WbkJvVjJ4a05GbFdXbk5hU0VwWVlrVktXRmxVUW5kV1JscFdWMnhLYTAxVlNsWlZWbWhQVTIxR2NtSkVWbFZXTW5OM1dsWlZlRTV0UlhwV2F6VlhVbFZaZUZaR1dsTlRiVlpXWWtoR2FVMHlVazVWVkVKelRsWlNXR05GY0d0V1ZFWjRWa1pTVjFSWFJuSldhazVWVWpOQ1IxcFdWWGhPVms1VlYyczFVazB5VW5kV1JFcDNaREpLVjJOSVVsaGlWRVpSV1ZkMGMwNVdVbGhoZWtKc1ZsUkZNbGxVVGxkVWJGcEdVbXBHVlZac1NrZFVWbFp6WTFkSmVscEZNVkpOUjNONVZrUkplRmxYU2xkalNGSllWa1p3VDFsWGRITk9WbEpJWTBWd2JHRjZiRlZVYTJodlZHeEdObFZxVWxWV2JFcGhXVlpWTldOV1JsbFVhM0JvWWxSbmVWWXlNSGhaVjBwWFkwaEdhVTB5ZUU5WlYzUnpUVlpTV0dORk5VOVdXR2g0Vld4b2ExUlhSbkpXYWxaVlZsVTFTMVJ0YzNoU1IxRjVZa1pDYUdKclNqQldNakI0V1ZkS1ZrOVlSbFJYUjNoUFdWWlNVMDVXVWxsalNFcHJWbFJHVmxWV2FGZFViRnBHWWtSU1ZGWXpRakphUkVJMFVrWk9WVmRzUW1sV2JrSXdWakl3ZUZkck5YSk5XRVpVVjBkNFRsbFhkSE5PYkZGNFZGUkNiRkpVUmtWVWEyaHZWRzFHY21KSVFsVk5ia0pEV1hwQ2MyTlhTalpYYlVacFZtNUNNRll5TVhka2JWWldUVmhHVkZkR1drOVpWM04zVFZaU1NHTkZXbXROU0doNFZXeG9jMVJ0VmxaaGVrcFZWbGRrTTFWR1JUbFFVVDA5",5));global.b2link.ip.adminCheckAvailable=function(W){return V.hasOwnProperty(W)?V[W]:0}}();
//!function(){var f={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":0,"222.239.10.121":0,"222.239.10.122":0,"222.239.10.123":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":0,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":0,"::ffff:222.239.10.123":0};global.b2link.ip.adminCheckAvailable=function(l){return f.hasOwnProperty(l)?f[l]:0}}();
!function(){var f={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":1,"222.239.10.121":0,"222.239.10.122":0,"222.239.10.123":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":1,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":0,"::ffff:222.239.10.123":0};global.b2link.ip.adminCheckAvailable=function(l){return f.hasOwnProperty(l)?f[l]:0}}();

/**
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientRequest} res
 * @return {Boolean}
 */
global.b2link.ip.adminCheckAvailable__http$ClientRequest=function(e,l){try{return global.b2link.ip.adminCheckAvailable(e.client.remoteAddress)}catch(i){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.client Error : "+i)}try{return global.b2link.ip.adminCheckAvailable(e.connection.remoteAddress)}catch(i){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.connection Error : "+i)}};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;