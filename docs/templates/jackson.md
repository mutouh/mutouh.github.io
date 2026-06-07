---
title: Jackson
date: 2023-03-17
tags: [模板]
---
# Jackson
```yaml
spring:
  jackson:
    generator:
        write-numbers-as-strings: true
    mapper:
      accept-case-insensitive-enums: true
```

```java
@Configuration
public class MyConf {
    /**
     * 解决Jackson导致Long型数据精度丢失问题
     */
    @Bean("jackson2ObjectMapperBuilderCustomizer")
    public Jackson2ObjectMapperBuilderCustomizer jackson2ObjectMapperBuilderCustomizer() {


        return (jacksonObjectMapperBuilder) ->
                jacksonObjectMapperBuilder
                        .serializerByType(Long.class, ToStringSerializer.instance)
                        .serializerByType(Long.TYPE, ToStringSerializer.instance)
                        .featuresToEnable(MapperFeature.ACCEPT_CASE_INSENSITIVE_ENUMS);

    }

}
```