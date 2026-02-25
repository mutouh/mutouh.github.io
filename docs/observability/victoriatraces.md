---
title: VictoriaTraces 入门
date: 2026-02-16
tags: [可观测性, VictoriaMetrics]
---
# VictoriaTraces 入门

## 安装

### helm 安装

```shell
helm repo add vm https://victoriametrics.github.io/helm-charts/

export RETENTION=30d
export PVC_SIZE=10Gi
export NAMESPACE=tracing

helm install vts vm/victoria-traces-single --namespace $NAMESPACE --wait \
    --set "server.retentionPeriod=$RETENTION" --set "server.persistentVolume.size=$PVC_SIZE"

# helm show values vm/victoria-traces-single > values.yaml
# helm install vts vm/victoria-traces-single -f values.yaml -n $NAMESPACE
```

## 写数据
victoriatraces 支持 OpenTelemetry 协议(OTLP)，提供了 HTTP API（/insert/opentelemetry/v1/traces）和 gRPC 服务，分别支持  OTLP/HTTP 和 OTLP/gRPC。

## 读数据
VictoriaTraces 可以使用内置从 VMUI 浏览数据，地址 [http://vts-vt-single-server:10428/vmui](http://vts-vt-single-server:10428/vmui)。
VictoriaTraces 同时提供 Jaeger Query Service JSON APIs，这允许用户在grafana上可视化链路数据，只需要添加一个 Jaeger 数据源，填写地址为：http://vts-vt-single-server:10428/select/jaeger

## otlp 配置示例
```yml otel-collector.cm.yml
exporters:
  debug: {}
  otlphttp/vts:
    traces_endpoint: http://vts-vt-single-server:10428/insert/opentelemetry/v1/traces
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
    traces:
      exporters:
      - otlp
      - debug
      processors:
      - k8sattributes
      - memory_limiter
      - resource
      - transform
      - batch
      receivers:
      - otlp
```

## 参考文献
- [VictoriaTraces 快速开始](https://docs.victoriametrics.com/victoriatraces/quick-start/)
- [helm 安装 VictoriaTraces Single](https://docs.victoriametrics.com/helm/victoria-traces-single/)
- [VictoriaLogs 基于 OpenTelemetry 数据采集](https://docs.victoriametrics.com/victoriatraces/data-ingestion/opentelemetry/)
- [集成 grafana 可视化](https://docs.victoriametrics.com/victoriatraces/querying/grafana/)
