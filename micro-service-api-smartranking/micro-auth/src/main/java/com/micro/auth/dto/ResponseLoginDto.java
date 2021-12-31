package com.micro.auth.dto;

import lombok.*;

import java.io.Serializable;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class ResponseLoginDto implements Serializable {

    private static final long serialVersionUID = 1l;

    private String token;
}
