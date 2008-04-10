defineStructure(
"StringJoiner",function(factory){with(factory) { typeTable(["org.mockito.exceptions.StringJoiner","cl"],["java.lang.String","cl"],["java.lang.StringBuilder","cl"]),methodTable([0,"join",["java.lang.String[]"],"st me"],[2,"StringBuilder",[1],"co"],[2,"append",[1],"me"],[2,"lastIndexOf",[1],"me"],[2,"replace",["int","int",1],"me"],[2,"toString",[],"me"]),localVariableTable(["linesToBreak","join(java.lang.String[])-linesToBreak"],["out","join(java.lang.String[])-out"],["line","join(java.lang.String[])-line"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.exceptions;",nl,nl,C(0,[],$(c," StringJoiner ",B(nl,nl,w(4),M(0,[],[],$(s,_,T(1),_,I("join"),P(V(0,$(T(1)," ... ",I("linesToBreak")))),_,B(nl,w(8),V(1,$(T(2),_,I("out")," = ",n,_,N(1),P(L("\"\\n\"")),";")),nl,w(8),fo,_,P(V(2,$(T(1),_,I("line")))," : ",W(0)),_,B(nl,w(12),W(1),".",N(2),P(W(2)),".",N(2),P(L("\"\\n\"")),";",nl,w(8)),nl,w(8),j," lastBreak = ",W(1),".",N(3),P(L("\"\\n\"")),";",nl,w(8),r,_,W(1),".",N(4),P("lastBreak, lastBreak+",L("1"),", ",L("\"\"")),".",N(5),P(),";",nl,w(4)))),nl))));}});