(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('南陵县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340223","properties":{"name":"南陵县","cp":[118.334359,30.914922],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@@@@@CCA@BKE@C@GAE@AEA@@IAK@@GIECEDEIECCABCIGGAAE@CECACGAAB@FDD@DE@@DE@AAEAEEC@EECCMC@HBFBHAFCDBDHBBFDDBBBDBDDFFHJ@HHAD@HDFFHJFFHBFMBCF@HAJDBCBAFCDE@GAEHEJIDBFD@BDAD@DABC@A@EBAHEACAC@ACBAGAAB@@A@EFC@ACA@@AA@CB@B@B@BCAA@A@ABABC@A@@BA@CB@BB@BDCBMHEBIFEFCHGFEDGDEBCBGBGBI@KBIB@@GBK@CBED@BADABCJEDCDIBA@I@G@ED@DDFFHFHFHLLJLDF@HCBCB@FDDADADBB@DDFD@@ADBFHD@FD@DABFBFDDBLBBABADE@CBEBEFEDCF@FAD@@@D@@@@@@AB@BBD@@@B@@@BBBA@AB@@@@@BF@@AB@BB@ABFABBA@B@B@@B@@@@@@@BAB@@BB@@BB@@BB@@@@@BA@A@@@@@A@@@A@A@@@A@@BA@@@AB@AAB@BB@@@@@B@@@@BB@@B@@@@D@BBB@@@@@@DBDBDDBFDHDFADAHA@@B@FAFA@@HAF@FB@@@BBBFFFFDHHFHFHDHDHDFDJFHDHBHDHBHBH@H@BEBBHBB@@@FBDDBDJCBDIDAD@LC@CJAFJABB@DIBADAF@FDJBFBBBB@F@FBFBBBBCDCFDHFDFDHFN@FFBHPDPNABBBB@@HB@FJD@BDGBACC@@DA@C@@B@@CDCAABDDABBB@BDD@DBB@FB@BB@BB@BFBHB@BDD@BF@BBBDBB@AA@@@AD@BDB@F@DABAB@FE@GF@BCBKCEHCFDBA@ED@DAB@BBC@@BD@BKDBFABBHCB@FE@BH@H@ADBF@D@HDDDAH@H@BA@CBAAABABDADADB@BEFAAA@ABB@BB@BAB@ABDB@@@CBC@B@@BBDADAB@BEDCFGFCDEBAFAFDFBDCBBBCF@F@D@BAAEFCLBHFH@@EF@BD@BHJJ@DAD@BCD@BFFFDHFDB@BD@JCBAF@FAB@DBBBBD@BB@@FD@FAB@B@D@BDHABEFGBCBAHAHADDPAF@BDDAJ@B@D@DBFCRAFCH@DDFBBBBBB@FADBBABBB@D@BBDBDBB@D@B@DCDABAF@@AFAH@HAB@D@DBBFDBDBDBBHFHFFDBCBC@ADAB@BAD@BBFDBBDF@DBBBBFHBBB@@@@@@@BBB@BBDBB@@AB@B@@@B@@BFDBBBB@BBB@@B@RBXADA@@BA@A@AACAAECEEIM@GHCB@P@NCNEPBFCBCBAMMWGCEECCIGOACBADCFCD@F@@@LDBCEE@CFM@EDABA@E@C@A@AAE@IDEBAD@F@FHDB@D@FAFBFHBDADEBGBEFEHCBAD@DBDDADEDADAHAFDFFDBBJBB@DAHANBBA@CLOBIAGMEAA@ECAAA@ODEHCL@@U@AAA@EGSBMCAGDILEAECGAAAKAGCECHIBIBK@EACKAMEGCAAAGBEBEDCFCDBHBDBPRDAJQ@[@EAG@E@ABEBC@A@ABADI@@@ABA@@DCB@BCBADADCFCFCBADEBE@A@C@AACAACEECGAEACA@@AACACCAAAAAA@A@@@A@AFGBC@@@A@E@@@A@CAAAAACA@AACAAA@@C@A@CB@B@BABC@A@A@@@C@A@AA@@A@@A@@@ABC@ABABA@AB@BBB@D@@AHABA@@@CAE@AAAAAA@AA@ACE@@@@BABBD@BBDDDF@BB@B@B@B@BA@@BA@A@@@ABA@@B@BAD@@@BBB@@@@A@@@A@A@@AAAAA@AA@@C@@A@@@A@@@@@AB@@AB@A@@@@AAB@@EA@@AGDA@@@A@@@AAA@@A@A@C@@@GCEE@AAA@A@A@A@ADEDC@E@@B@B@D@@@B@B@@@B@B@B@DAFCBA@@@@@ABABABCB@@A@@BAA@@@BABA@@B@@@@A@A@@@@@CCC@AB@BDB@@@@B@@@BB@@@@@@@BB@@B@@ACA@A@A@@B@@@@@A@A@AA@A@@@@AA@@@B@@A@A@A@@@AAAA@@CC@A@@AB@@AC@AIEGCAACEAAACAEBM@O@EC@OCCBFHABBBC@E@ADC@GH@B@BC@A@@@EB@BC@ADHL@BEBFNCJG@MCEBMGEJA@KJAJGDCBA@AF@BDBBAB@@BLBBCAAFCFFF@AFCBBJD@ADO@FPABBD@DI@GBGD@FC@CBACC@ABA@AAC@BCAAABE@ACEEA@@@@NADE@EHI@IEEAG@CEQF@A@C@GEA@CICCGCKQDIICB@BCBCCGAA@A@C@A@@@@AA@BAA@AAB@AA@@AA@@A@@@@AAA@@@A@AA@@@AA@@@A@@@AA@A@@@AA@@@@A@@@A@@C@@@@@ABA@@@@@A@ADA@AB@@@BABA@@@C@A@A@@A@@@@BA@@@AB@@@BA@@@CD@@A@A@@B@@@@AAA@A@AA@@@A@@@@@ABC@@@CB@B@@@@@@@DA@@B@@A@AB@B@BA@@D@@A@@B@@@B@@A@A@A@@B@@A@A@@@A@@@@A@@B@@A@@@@@A@@@A@@B@@@@ABCB@@@BC@A@AB@@@A@@@A@@@A@@@A@CAA@@@C@A@@@@DADA@A@@A@@@AAA@A@@A@@@@AAA@@AA@A@A@ID@G@EACDEF@@E@CCEC@ADE@BACCCEEC@EACCA@AE@CCAEDE@ADCBAFA@C@ATBDCBAAC@EDGN@D@FBHCDC@AAABAB@CEACAC@CAA@@C@E@EAA@EDA@G@AAE@CDADABA@@@AFEB@DEBGAIBAB@@IECBCAGIGC@ECE@@KFEAAB@@CDKBED@BADGFH@BBABC@AACBMDAAC@@E@CCEEAEEEACBEFECGGECIEEBEC"],"encodeOffsets":[[121014,31430]]}}],"UTF8Encoding":true});}));