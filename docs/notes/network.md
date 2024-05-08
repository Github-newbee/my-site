---
outline: deep
---

# 计算机网络相关

## 计算机网络

是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通信线路连接起来，在网络操作系统、网络管理软件及网络通信协议的管理和协调下，实现资源共享和信息传递的计算机系统

## IP 地址

IP地址是在互联网上唯一标识每台联网设备的逻辑地址，它是计算机网络中进行数据通信的基础要素之一。每一台连入互联网的设备，无论是个人电脑、服务器、智能手机还是其他任何具有联网功能的设备，都需要一个或多个IP地址以便与其他设备进行通信。  

IP地址采用二进制形式表示，但为了便于人们阅读和记忆，通常会以十进制并用句点分隔的形式来展示，例如 `192.0.2.1` 目前广泛使用的IP地址版本主要有IPv4和IPv6两种：

- IPv4：是最常见的IP地址类型，由32位二进制组成，因此理论上最多可提供约42亿（2^32）个独立地址。IPv4地址通常表示为四个8位的二进制数，每个8位数转换成十进制后用句点分隔。

- IPv6：由于IPv4地址资源有限，为了满足日益增长的互联网设备需求，IPv6被设计出来，它由128位二进制组成，理论上可提供近乎无限数量的地址空间。IPv6地址通常表示为八个16位的十六进制数，各段之间用冒号分隔，例如 2001:0db8:85a3:0000:0000:8a2e:0370:7334。

IP地址不仅用于设备标识，还承载了网络层次信息，通过网络掩码（或子网掩码）划分出网络部分和主机部分，从而实现网络内的寻址和路由转发。此外，动态主机配置协议（DHCP）允许网络管理员自动分配IP地址，而无需手动设置，进一步简化了网络管理。在实际应用中，IP地址与域名系统（DNS）相结合，使得用户可以通过易于记忆的域名而非具体的IP地址访问互联网上的资源。

## 子网掩码

用于划分网络地址和主机地址。

## OSI 七层模型

包括物理层、数据链路层、网络层、传输层、会话层、表示层和意识层。

## TCP/IP 协议

是 Internet 最基本的协议。

## HTTP 协议

是用于从万维网服务器传输超文本到本地浏览器的传送协议。

## FTP 协议

用于在计算机之间传输文件。

## 网络安全

包括防火墙、加密技术、身份验证等。

## 无线网络

是采用无线通信技术实现的网络

## 网络协议

是计算机网络中通信双方必须共同遵守的规则和约定。

## 数据包

在网络中传输的数据单元。

## 路由器

用于在不同网络之间转发数据包。

## 交换机

在局域网中实现数据帧的快速转发。

## 防火墙

保护网络免受外部攻击。

## 域名系统（DNS）

将域名转换为 IP 地址。

## 网络延迟

数据在网络中传输所需的时间。

## 带宽

网络的通信能力。
> 是指在单位时间内从网络中的某一点到另一点所能通过的“最高数据率”。

它可以理解为网络通信的“管道粗细”，带宽越大，数据传输的能力就越强，能够在单位时间内传输更多的数据

## 网络拥塞

网络中数据流量过大导致的堵塞现象。

## 虚拟专用网络（VPN）

在公共网络上建立安全的私有网络连接。  

## 网络拓扑结构

主要有总线型、星型、环型、树型和网状型等。