# Mihomo Config

*Mihomo 内核* 覆写文件。

## 简介

该项目提供了一个覆写配置文件，符合 *Mihomo 内核* 规则，可用于部分使用 *Mihomo 内核* 的代理客户端。

## 使用方式

复制 [v0.7](https://raw.githubusercontent.com/NULLX9/Mihomo-Config-Public/refs/heads/main/version/v0.7.yaml) 地址，导入到 *代理客户端* 的**覆写**选项中。<br>
复制 [v0.6](https://raw.githubusercontent.com/NULLX9/Mihomo-Config-Public/refs/heads/main/version/v0.6.yaml) 地址，导入到 *代理客户端* 的**覆写**选项中。<br>

## 部分链接

[Clash Verge Rev 策略组图标](https://www.clashverge.dev/guide/group_icon/group_icon.html)<br>
[Mihomo 路由规则](https://wiki.metacubex.one/config/rules/)<br>
[代理规则集](https://ruleset.zcsouls.com/)<br>
[ClashMi](https://github.com/KaringX/clashmi)<br>
[Clash Party](https://github.com/mihomo-party-org/clash-party)<br>
[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev)<br>
[clash-rules](https://github.com/Loyalsoldier/clash-rules)<br>
[v2ray-rules-dat](https://github.com/Loyalsoldier/v2ray-rules-dat)<br>
[ios_rule_script](https://github.com/blackmatrix7/ios_rule_script)<br>
~~[GFWList](https://github.com/gfwlist/gfwlist)~~<br>
[zashboard](https://github.com/Zephyruso/zashboard)<br>

## 更新日志

- v0.1<br>
  已知问题：Google Play商店无法下载应用。

- v0.2<br>
  使用[clash-rules](https://github.com/Loyalsoldier/clash-rules)仓库4个直连规则。<br>
  已知问题：使用[clash-rules](https://github.com/Loyalsoldier/clash-rules)时规则类型应为domain。<br>

- v0.3<br>
  使用geodata-cn规则作为主要直连规则。<br>

- v0.5<br>
  添加geosite:catetory-ads-all广告拦截规则；<br>
  取消覆写dns和域名嗅探。<br>

- v0.6<br>
  **调整**：url-test 测速间隔缩短至 60s，加快故障切换；<br>
  **调整**：tolerance 统一为 150ms，减少频繁抖动；<br>
  **新增**：url-test 与 fallback 组显式指定测速 URL（Cloudflare 204）；<br>
  **修复**：图标链接添加 gh-proxy 代理前缀，解决国内访问问题；<br>
  **优化**：精简注释和分界线标记，配置更清爽。<br>

- v0.7<br>
  **调整**：所有 url-test 类型改为 load-balance，流量分散到多个节点；<br>
  **新增**：load-balance 组统一添加 strategy: round-robin 轮询策略；<br>
  **移除**：load-balance 组中无效的 tolerance 参数。<br>
