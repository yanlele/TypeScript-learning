/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-10-01 11:31
 */

/// <reference path="Validation.ts"/>
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}