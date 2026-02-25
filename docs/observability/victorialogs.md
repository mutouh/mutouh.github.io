---
title: VictoriaLogs 入门
date: 2026-02-16
tags: [可观测性, VictoriaMetrics]
---
# VictoriaLogs 入门

## 安装


### helm 安装

```shell
helm repo add vm https://victoriametrics.github.io/helm-charts/

export RETENTION=30d
export PVC_SIZE=10Gi
export NAMESPACE=logging

# Install victoria-logs-single chart
helm install vls vm/victoria-logs-single --namespace $NAMESPACE --wait \
    --set "server.retentionPeriod=$RETENTION" --set "server.persistentVolume.size=$PVC_SIZE"

# Install victoria-logs-collector chart
#helm install vl-collector vm/victoria-logs-collector --namespace $NAMESPACE \
    --set "remoteWrite[0].url=http://vls-victoria-logs-single-server:9428"

# helm show values vm/victoria-logs-single > values.yaml
# helm install vls vm/victoria-logs-single -f values.yaml -n $NAMESPACE
```

## 写数据
- victorialogs collector

原生的收集器支持 helm 安装，可以自动收集所有 pod 的日志。

- 支持 OpenTelemetry

victorialogs 支持 OpenTelemetry 协议(OTLP)，提供了 HTTP API（/insert/opentelemetry/v1/traces）支持 OTLP/HTTP 协议。

- 其他业界已有的日志采集器

## 读数据
- 原生可视化

VictoriaLogs 可以使用内置 VMUI 浏览数据，地址 [http://vls-victoria-logs-single-server:9428/vmui](http://vls-victoria-logs-single-server:9428/vmui)。

- grafana 可视化

需要安装 VictoriaLogs grafana 插件，而后添加数据源，填写地址为：http://vls-victoria-logs-single-server:9428

## otlp 配置示例
```yml otel-collector.cm.yml
exporters:
  debug: {}
  otlphttp/vls:
    logs_endpoint: http://vls-victoria-logs-single-server:9428/insert/opentelemetry/v1/logs
processors: {...省略...}
receivers:
  otlp:
    protocols:
      grpc:
        endpoint: ${env:MY_POD_IP}:4317
      http:
        cors:
          allowed_origins:
          - http://*
          - https://*
        endpoint: ${env:MY_POD_IP}:4318
service:
  pipelines:
    logs:
      exporters:
      - otlp
      - debug
      processors:
      - k8sattributes
      - memory_limiter
      - resource
      - batch
      receivers:
      - otlp
```

## 参考文献
- [VictoriaLogs 快速开始](https://docs.victoriametrics.com/victorialogs/quickstart/)
- [helm 安装 VictoriaLogs Single](https://docs.victoriametrics.com/helm/victoria-logs-single/)
- [VictoriaLogs 基于 OpenTelemetry 数据采集](https://docs.victoriametrics.com/victorialogs/data-ingestion/opentelemetry/)
- [集成 grafana 可视化](https://docs.victoriametrics.com/victorialogs/integrations/grafana/)
