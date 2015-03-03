### datenum(d,fmt)

Convert date and time to serial date number (Unix)


#### Description

Convert date and time to serial date number (Unix). Based on [moment.js](http://momentjs.com)  
  
|Identifier| Example          | Description |  
| ----------- | ---------------- | ----------- |  
| `YYYY`      | `2014`           | 4 digit year |  
| `YY`        | `14`             | 2 digit year |  
| `Q`         | `1..4`           | Quarter of year. Sets month to first month in quarter. |  
| `M MM`      | `1..12`          | Month number |  
| `MMM MMMM`  | `January..Dec`   | Month name in locale set by `moment.locale()` |  
| `D DD`      | `1..31`          | Day of month |  
| `Do`        | `1st..31st`      | Day of month with ordinal |  
| `DDD DDDD`  | `1..365`         | Day of year |  
| `X`         | `1410715640.579` | Unix timestamp |  
| `x`         | `1410715640579`  | Unix ms timestamp |  
|  
| `gggg`   | `2014`  | Locale 4 digit week year |  
| `gg`     | `14`    | Locale 2 digit week year |  
| `w ww`   | `1..53` | Locale week of year |  
| `e`      | `1..7`  | Locale day of week |  
| `GGGG`   | `2014`  | ISO 4 digit week year |  
| `GG`     | `14`    | ISO 2 digit week year |  
| `W WW`   | `1..53` | ISO week of year |  
| `E`      | `1..7`  | ISO day of week |  
|  
| `H HH`         | `0..23`  | 24 hour time |  
| `h hh`         | `1..12`  | 12 hour time used with `a A`. |  
| `a A`          | `am pm`  | Post or ante meridiem |  
| `m mm`         | `0..59`  | Minutes |  
| `s ss`         | `0..59`  | Seconds |  
| `S`            | `0..9`   | Tenths of a second |  
| `SS`           | `0..99`  | Hundreds of a second |  
| `SSS`          | `0..999` | Thousandths of a second |  
| `Z ZZ`         | `+12:00` | Offset from UTC as `+-HH:mm`, `+-HHmm`, or `Z` |  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`d` | string/array/matrix | string or array of dates
|`fmt` | string | format string


#### Examples

```js
ubique.datenum('31-12-2014','DD-MM-YYYY');
// 1419980400
ubique.datenum(['31-12-2014','31-01-2015'],'DD-MM-YYYY');
// [ 1419980400, 1422658800 ]
ubique.datenum([['31-12-2014','31-01-2015'],['15-02-2015','01-03-2015']],'DD-MM-YYYY');
// [ [ 1419980400, 1422658800 ], [ 1423954800, 1425164400 ] ]
```
