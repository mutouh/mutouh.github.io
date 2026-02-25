---
title: VictoriaMetrics 入门
date: 2026-02-16
tags: [可观测性, VictoriaMetrics]
---
# VictoriaMetrics 入门

## 安装

### helm 安装

```shell
helm repo add vm https://victoriametrics.github.io/helm-charts/

helm install vms vm/victoria-metrics-single -n $NAMESPACE

# helm show values vm/victoria-metrics-single > values.yaml
# helm install vms vm/victoria-metrics-single -f values.yaml -n $NAMESPACE
```

## 写数据

victoriametrics 支持推拉两种模式

- 支持 OpenTelemetry

victoriametrics 支持 OpenTelemetry 协议(OTLP)，提供了 HTTP API（/opentelemetry/v1/metrics）支持 OTLP/HTTP 协议。

- 其他业界已有的指标采集器

## 读数据
- 原生可视化

VictoriaMetrics 可以使用内置 VMUI 浏览数据，地址 [http://vms-victoria-metrics-single-server:8428/vmui](http://vms-victoria-metrics-single-server:8428/vmui)。

- grafana 可视化

可以直接使用 Prometheus 插件，或安装 VictoriaMetrics grafana 插件，而后添加数据源，填写地址为：http://vms-victoria-metrics-single-server:8428

## otlp 配置示例
```yml otel-collector.cm.yml
exporters:
  debug: {}
  otlphttp/vms:
    compression: gzip
    encoding: proto
    metrics_endpoint: http://vms-victoria-metrics-single-server:8428/opentelemetry/v1/metrics
    tls:
      insecure: true
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
      - otlphttp/vms
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
- [VictoriaMetrics 快速开始](https://docs.victoriametrics.com/victoriametrics/quick-start/)
- [helm 安装 VictoriaMetrics Single](https://docs.victoriametrics.com/helm/victoria-metrics-single/)
- [VictoriaMetrics 基于 OpenTelemetry 数据采集](https://docs.victoriametrics.com/victoriametrics/single-server-victoriametrics/#sending-data-via-opentelemetry)
- [集成 grafana 可视化](https://docs.victoriametrics.com/victoriametrics/integrations/grafana/)
