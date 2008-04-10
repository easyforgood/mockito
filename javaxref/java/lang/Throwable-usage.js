setClassUsage('java.lang.Throwable',
{"initCause(java.lang.Throwable)":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"MockitoAssertionError","kind":"class","access":"public","line":10,"children":[{"name":"MockitoAssertionError(String,Throwable)","kind":"method","access":"public","line":24,"leaves":[28]}]}]}]}]}]}]},"getCause()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","classes":[{"name":"TestBase","kind":"class","access":"public","line":17,"children":[{"name":"causeMessageContains(String):Assertor","kind":"method","access":"public","static":true,"line":68,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":69,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":70,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":71,"leaves":[71]}]}]}]}]}]},{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"DescriptiveMessagesWhenTimesXVerificationFailsTest","kind":"class","access":"public","line":20,"children":[{"name":"shouldVerifyActualNumberOfInvocationsLargerThanWanted():void","kind":"method","access":"public","line":57,"leaves":[82,76]},{"name":"shouldVerifyActualNumberOfInvocationsSmallerThanWanted():void","kind":"method","access":"public","line":30,"leaves":[53,48]}]},{"name":"DescriptiveMessagesWhenVerificationFailsTest","kind":"class","access":"public","line":24,"children":[{"name":"shouldPrintFirstUnexpectedInvocation():void","kind":"method","access":"public","line":165,"leaves":[181,188]},{"name":"shouldPrintActualAndWantedInMultipleLines():void","kind":"method","access":"public","line":93,"leaves":[119,133]},{"name":"shouldPrintFirstUnexpectedInvocationWhenVerifyingZeroInteractions():void","kind":"method","access":"public","line":192,"leaves":[213]},{"name":"shouldPrintActualAndWantedInLine():void","kind":"method","access":"public","line":65,"leaves":[89,81]}]},{"name":"DescriptiveMessagesOnVerificationInOrderErrorsTest","kind":"class","access":"public","line":24,"children":[{"name":"shouldPrintVerificationInOrderErrorAndShowWantedOnly():void","kind":"method","access":"public","line":77,"leaves":[91]},{"name":"shouldPrintVerificationInOrderErrorAndShowWantedAndActual():void","kind":"method","access":"public","line":95,"leaves":[110]},{"name":"shouldPrintTooLittleInvocations():void","kind":"method","access":"public","line":163,"leaves":[191,185]},{"name":"shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious():void","kind":"method","access":"public","line":46,"leaves":[73,65]},{"name":"shouldPrintTooManyInvocations():void","kind":"method","access":"public","line":136,"leaves":[154,159]}]}]}],"classes":[{"name":"PointingStackTraceToActualInvocationChunkInOrderTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldPointStackTraceToPreviousInvocation():void","kind":"method","access":"public","line":53,"leaves":[62]},{"name":"shouldPointToThirdChunkWhenTooLittleActualInvocations():void","kind":"method","access":"public","line":78,"leaves":[88]},{"name":"shouldPointToThirdInteractionBecauseAtLeastOnceUsed():void","kind":"method","access":"public","line":66,"leaves":[74]},{"name":"shouldPointToFourthChunkBecauseTooManyActualInvocations():void","kind":"method","access":"public","line":92,"leaves":[100]}]},{"name":"StackTrackeChangingTest","kind":"class","access":"public","line":16,"children":[{"name":"shouldShowActualInvocationAsExceptionCause():void","kind":"method","access":"public","line":29,"leaves":[38,39]}]},{"name":"PointingStackTraceToActualInvocationInOrderTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldPointToSecondMethod():void","kind":"method","access":"public","line":74,"leaves":[83]},{"name":"shouldPointToThirdMethod():void","kind":"method","access":"public","line":62,"leaves":[70]},{"name":"shouldPointStackTraceToPreviousVerified():void","kind":"method","access":"public","line":49,"leaves":[58]},{"name":"shouldPointToSecondMethodBecauseOfTooManyActualInvocations():void","kind":"method","access":"public","line":97,"leaves":[105]},{"name":"shouldPointToFourthMethodBecauseOfTooLittleActualInvocations():void","kind":"method","access":"public","line":109,"leaves":[119]},{"name":"shouldPointToFirstMethodBecauseOfTooManyActualInvocations():void","kind":"method","access":"public","line":87,"leaves":[93]}]},{"name":"PointingStackTraceToActualInvocationChunkTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldPointToTooLittleInvocationsChunkOnError():void","kind":"method","access":"public","line":72,"leaves":[79]},{"name":"shouldPointToUnverifiedActualInvocationOnVerificationError():void","kind":"method","access":"public","line":61,"leaves":[68]},{"name":"shouldPointToActualInvocationOnVerificationError():void","kind":"method","access":"public","line":51,"leaves":[57]},{"name":"shouldPointToTooManyInvocationsChunkOnError():void","kind":"method","access":"public","line":83,"leaves":[89]}]},{"name":"PointingStackTraceToActualInvocationTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldPointToUnverifiedActualInvocationOnVerificationError():void","kind":"method","access":"public","line":57,"leaves":[64]},{"name":"shouldPointToTooManyInvocationsChunkOnError():void","kind":"method","access":"public","line":79,"leaves":[85]},{"name":"shouldPointToTooLittleInvocationsChunkOnError():void","kind":"method","access":"public","line":68,"leaves":[75]},{"name":"shouldPointToActualInvocationOnVerificationError():void","kind":"method","access":"public","line":47,"leaves":[53]}]}]}]}]},"fillInStackTrace()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"stubbing","classes":[{"name":"Result","kind":"class","access":"public","line":10,"children":[{"name":"createThrowResult(Throwable,StackTraceFilter):Result","kind":"method","access":"public","static":true,"line":19,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":20,"children":[{"name":"answer():Object","kind":"method","access":"public","local":true,"line":21,"children":[{"name":"filtered","kind":"null","access":"default","local":true,"line":22,"leaves":[22]}]}]}]}]}]}]}]}]}]},"getStackTrace()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"MockitoException","kind":"class","access":"public","line":8,"children":[{"name":"filterStackTrace():void","kind":"method","access":"private","line":24,"leaves":[25]}]},{"name":"MockitoAssertionError","kind":"class","access":"public","line":10,"children":[{"name":"MockitoAssertionError(String,Throwable)","kind":"method","access":"public","line":24,"leaves":[30]},{"name":"MockitoAssertionError(String)","kind":"method","access":"public","line":15,"leaves":[18]}]},{"name":"HasStackTraceThrowableWrapper","kind":"class","access":"public","line":7,"children":[{"name":"getStackTrace():StackTraceElement[]","kind":"method","access":"public","line":15,"leaves":[16]}]}]}]},{"kind":"package","name":"internal","children":[{"kind":"package","name":"stubbing","classes":[{"name":"ResultTest","kind":"class","access":"public","line":16,"children":[{"name":"shouldFilterStackTraceWhenCreatingThrowResult():void","kind":"method","access":"public","line":29,"leaves":[37]}]}]}]},{"kind":"package","name":"util","classes":[{"name":"ExtraMatchers","kind":"class","access":"public","line":17,"children":[{"name":"hasMethodInStackTraceAt(int,String):Assertor","kind":"method","access":"public","static":true,"line":60,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":61,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":65,"leaves":[66]}]}]}]}]}]}]}]},"setStackTrace(java.lang.StackTraceElement[])":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"HasStackTraceThrowableWrapper","kind":"class","access":"public","line":7,"children":[{"name":"setStackTrace(StackTraceElement[]):void","kind":"method","access":"public","line":19,"leaves":[20]}]}]}],"classes":[{"name":"Reporter","kind":"class","access":"public","line":39,"children":[{"name":"createUndesiredInvocationCause(HasStackTrace):UndesiredInvocation","kind":"method","access":"private","line":221,"leaves":[223]},{"name":"wantedButNotInvokedInOrder(PrintableInvocation,PrintableInvocation,HasStackTrace):void","kind":"method","access":"public","line":180,"leaves":[184]},{"name":"createTooLittleInvocationsCause(HasStackTrace):TooLittleInvocations","kind":"method","access":"private","line":247,"leaves":[251]},{"name":"noMoreInteractionsWanted(PrintableInvocation,HasStackTrace):void","kind":"method","access":"public","line":256,"leaves":[262]},{"name":"argumentsAreDifferent(PrintableInvocation,PrintableInvocation,HasStackTrace):void","kind":"method","access":"public","line":159,"leaves":[165]}]}]}]}]}]},"getMessage()":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"internal","children":[{"kind":"package","name":"invocation","classes":[{"name":"InvocationTest","kind":"class","access":"public","line":19,"children":[{"name":"shouldNotBeACitizenOfHashes():void","kind":"method","access":"public","line":50,"leaves":[57]}]}]},{"kind":"package","name":"progress","classes":[{"name":"VerificationModeImplTest","kind":"class","access":"public","line":14,"children":[{"name":"shouldNotAllowCreatingModeWithNegativeNumberOfInvocations():void","kind":"method","access":"public","line":25,"leaves":[31]}]}]}]}],"classes":[{"name":"TestBase","kind":"class","access":"public","line":17,"children":[{"name":"messageContains(String):Assertor","kind":"method","access":"public","static":true,"line":58,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":59,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":60,"leaves":[62,63]}]}]},{"name":"causeMessageContains(String):Assertor","kind":"method","access":"public","static":true,"line":68,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":69,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":70,"leaves":[74,73]}]}]}]}]},{"kind":"package","name":"mockitousage","children":[{"kind":"package","name":"verification","classes":[{"name":"DescriptiveMessagesWhenTimesXVerificationFailsTest","kind":"class","access":"public","line":20,"children":[{"name":"shouldVerifyActualNumberOfInvocationsLargerThanWanted():void","kind":"method","access":"public","line":57,"leaves":[82,74]},{"name":"shouldVerifyActualNumberOfInvocationsSmallerThanWanted():void","kind":"method","access":"public","line":30,"leaves":[53,46]}]},{"name":"DescriptiveMessagesWhenVerificationFailsTest","kind":"class","access":"public","line":24,"children":[{"name":"shouldPrintMethodName():void","kind":"method","access":"public","line":33,"children":[{"name":"actualMessage","kind":"null","access":"default","local":true,"line":39,"leaves":[39]}]},{"name":"shouldPrintFirstUnexpectedInvocation():void","kind":"method","access":"public","line":165,"leaves":[188,179]},{"name":"shouldPrintMethodWhenMatcherUsed():void","kind":"method","access":"public","line":227,"children":[{"name":"actualMessage","kind":"null","access":"default","local":true,"line":233,"leaves":[233]}]},{"name":"shouldPrintActualAndWantedInMultipleLines():void","kind":"method","access":"public","line":93,"leaves":[133,117]},{"name":"shouldPrintFirstUnexpectedInvocationWhenVerifyingZeroInteractions():void","kind":"method","access":"public","line":192,"leaves":[213,205]},{"name":"shouldPrintActualAndWantedInLine():void","kind":"method","access":"public","line":65,"leaves":[89,79]}]},{"name":"DescriptiveMessagesOnVerificationInOrderErrorsTest","kind":"class","access":"public","line":24,"children":[{"name":"shouldPrintVerificationInOrderErrorAndShowWantedOnly():void","kind":"method","access":"public","line":77,"leaves":[89]},{"name":"shouldPrintTooLittleInvocations():void","kind":"method","access":"public","line":163,"children":[{"name":"actualMessage","kind":"null","access":"default","local":true,"line":175,"leaves":[175]}],"leaves":[191]},{"name":"shouldPrintVerificationInOrderErrorAndShowWantedAndActual():void","kind":"method","access":"public","line":95,"leaves":[108]},{"name":"shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious():void","kind":"method","access":"public","line":46,"leaves":[63,73]},{"name":"shouldPrintMethodThatWasNotInvoked():void","kind":"method","access":"public","line":114,"children":[{"name":"actualMessage","kind":"null","access":"default","local":true,"line":124,"leaves":[124]}]},{"name":"shouldPrintTooManyInvocations():void","kind":"method","access":"public","line":136,"children":[{"name":"actualMessage","kind":"null","access":"default","local":true,"line":144,"leaves":[144]}],"leaves":[159]}]}]}],"classes":[{"name":"AnnotationsTest","kind":"class","access":"public","line":20,"children":[{"name":"shouldScreamWhenInitializingMocksForNullClass():void","kind":"method","access":"public","line":42,"leaves":[49]}]}]}]}]},"this":{"kind":"package","name":"","children":[{"kind":"package","name":"org","children":[{"kind":"package","name":"mockito","children":[{"kind":"package","name":"exceptions","children":[{"kind":"package","name":"base","classes":[{"name":"MockitoException","kind":"class","access":"public","line":8,"children":[{"name":"MockitoException(String,Throwable)","kind":"method","access":"public","line":14,"children":[{"name":"t","kind":"null","access":"default","local":true,"line":14,"leaves":[14]}]}]},{"name":"MockitoAssertionError","kind":"class","access":"public","line":10,"children":[{"name":"MockitoAssertionError(String,Throwable)","kind":"method","access":"public","line":24,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":24,"leaves":[24]}]}]},{"name":"HasStackTraceThrowableWrapper","kind":"class","access":"public","line":7,"children":[{"name":"throwable","kind":"field","access":"private","line":9,"leaves":[9]},{"name":"HasStackTraceThrowableWrapper(Throwable)","kind":"method","access":"public","line":11,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":11,"leaves":[11]}]}]}]},{"kind":"package","name":"verification","classes":[{"name":"TooManyActualInvocations","kind":"class","access":"public","line":9,"children":[{"name":"TooManyActualInvocations(String,Throwable)","kind":"method","access":"public","line":13,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":13,"leaves":[13]}]}]},{"name":"NeverWantedButInvoked","kind":"class","access":"public","line":9,"children":[{"name":"NeverWantedButInvoked(String,Throwable)","kind":"method","access":"public","line":13,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":13,"leaves":[13]}]}]},{"name":"NoInteractionsWanted","kind":"class","access":"public","line":12,"children":[{"name":"NoInteractionsWanted(String,Throwable)","kind":"method","access":"public","line":16,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":16,"leaves":[16]}]}]},{"name":"ArgumentsAreDifferent","kind":"class","access":"public","line":9,"children":[{"name":"ArgumentsAreDifferent(String,Throwable)","kind":"method","access":"public","line":13,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":13,"leaves":[13]}]}]},{"name":"VerifcationInOrderFailure","kind":"class","access":"public","line":9,"children":[{"name":"VerifcationInOrderFailure(String,Throwable)","kind":"method","access":"public","line":13,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":13,"leaves":[13]}]}]},{"name":"TooLittleActualInvocations","kind":"class","access":"public","line":9,"children":[{"name":"TooLittleActualInvocations(String,Throwable)","kind":"method","access":"public","line":13,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":13,"leaves":[13]}]}]}]}],"classes":[{"name":"Reporter","kind":"class","access":"public","line":39,"children":[{"name":"checkedExceptionInvalid(Throwable):void","kind":"method","access":"public","line":45,"children":[{"name":"t","kind":"null","access":"default","local":true,"line":45,"leaves":[45]}]}]}]},{"kind":"package","name":"internal","children":[{"kind":"package","name":"creation","classes":[{"name":"MethodInterceptorFilter","kind":"class","access":"public","line":11,"children":[{"name":"intercept(Object,Method,Object[],MethodProxy):Object","kind":"method","access":"public","line":33,"leaves":[34]}]},{"name":"MockAwareInterceptor","kind":"interface","access":"public","line":12,"children":[{"name":"intercept(Object,Method,Object[],MethodProxy):Object","kind":"method","access":"public","line":14,"leaves":[14]}]},{"name":"CglibTest","kind":"class","access":"public","line":22,"children":[{"name":"createMock():Factory","kind":"method","access":"private","line":36,"children":[{"name":"interceptor","kind":"null","access":"default","local":true,"line":38,"children":[{"name":"","kind":"class","access":"default","local":true,"line":38,"children":[{"name":"intercept(Object,Method,Object[],MethodProxy):Object","kind":"method","access":"public","local":true,"line":39,"leaves":[40]}]}]}]}]}]},{"kind":"package","name":"progress","classes":[{"name":"OngoingStubbing","kind":"interface","access":"public","line":24,"children":[{"name":"toThrow(Throwable):void","kind":"method","access":"public","line":51,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":51,"leaves":[51]}]}]}]},{"kind":"package","name":"stubbing","classes":[{"name":"StubbedInvocationMatcher","kind":"class","access":"public","line":9,"children":[{"name":"answer():Object","kind":"method","access":"public","line":19,"leaves":[19]}]},{"name":"Stubber","kind":"class","access":"public","line":16,"children":[{"name":"resultFor(Invocation):Object","kind":"method","access":"public","line":49,"leaves":[49]},{"name":"addThrowableForVoidMethod(Throwable):void","kind":"method","access":"public","line":58,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":58,"leaves":[58]}]},{"name":"throwableForVoidMethod","kind":"field","access":"private","line":23,"leaves":[23]},{"name":"isValidCheckedException(Throwable):boolean","kind":"method","access":"private","line":86,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":86,"leaves":[86]}]},{"name":"addThrowable(Throwable):void","kind":"method","access":"public","line":38,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":38,"leaves":[38]}]},{"name":"validateThrowable(Throwable):void","kind":"method","access":"private","line":72,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":72,"leaves":[72]}]}]},{"name":"VoidMethodStubbable","kind":"interface","access":"public","line":18,"children":[{"name":"toThrow(Throwable):StubbedMethodSelector","kind":"method","access":"public","line":37,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":37,"leaves":[37]}]}]},{"name":"Result","kind":"class","access":"public","line":10,"children":[{"name":"createReturnResult(Object):Result","kind":"method","access":"public","static":true,"line":28,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":29,"children":[{"name":"answer():Object","kind":"method","access":"public","local":true,"line":30,"leaves":[30]}]}]},{"name":"createThrowResult(Throwable,StackTraceFilter):Result","kind":"method","access":"public","static":true,"line":19,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":20,"children":[{"name":"answer():Object","kind":"method","access":"public","local":true,"line":21,"children":[{"name":"filtered","kind":"null","access":"default","local":true,"line":22,"leaves":[22]}],"leaves":[21]}]},{"name":"throwable","kind":"null","access":"default","local":true,"line":19,"leaves":[19]}]},{"name":"answer():Object","kind":"method","access":"public","line":36,"leaves":[36]}]},{"name":"StubberTest","kind":"class","access":"public","line":18,"children":[{"name":"shouldValidateThrowableForVoidMethod():void","kind":"method","access":"public","line":90,"leaves":[91]},{"name":"shouldGetResultsForMethods():void","kind":"method","access":"public","line":52,"leaves":[53]},{"name":"shouldLetSettingProperCheckedException():void","kind":"method","access":"public","line":108,"leaves":[109]},{"name":"shouldValidateNullThrowable():void","kind":"method","access":"public","line":100,"leaves":[101]},{"name":"shouldAddThrowableForVoidMethod():void","kind":"method","access":"public","line":79,"leaves":[80]},{"name":"shouldGetEmptyResultIfMethodsDontMatch():void","kind":"method","access":"public","line":69,"leaves":[70]}]},{"name":"ResultTest","kind":"class","access":"public","line":16,"children":[{"name":"shouldCreateReturnResult():void","kind":"method","access":"public","line":18,"leaves":[19]},{"name":"shouldCreateThrowResult():void","kind":"method","access":"public","line":24,"leaves":[25]},{"name":"shouldFilterStackTraceWhenCreatingThrowResult():void","kind":"method","access":"public","line":29,"leaves":[30]}]},{"name":"IAnswer","kind":"interface","access":"public","line":11,"children":[{"name":"answer():T","kind":"method","access":"public","line":17,"leaves":[17]}]}]}],"classes":[{"name":"MockHandler","kind":"class","access":"public","line":39,"children":[{"name":"intercept(Object,Method,Object[],MethodProxy):Object","kind":"method","access":"public","line":58,"leaves":[58]},{"name":"OngoingStubbingImpl","kind":"class","access":"private","line":135,"children":[{"name":"toThrow(Throwable):void","kind":"method","access":"public","line":141,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":141,"leaves":[141]}]}]},{"name":"VoidMethodStubbableImpl","kind":"class","access":"private","line":124,"children":[{"name":"toThrow(Throwable):StubbedMethodSelector","kind":"method","access":"public","line":125,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":125,"leaves":[125]}]}]}]},{"name":"MockHandlerTest","kind":"class","access":"public","line":16,"children":[{"name":"shouldRemoveVerificationModeEvenWhenInvalidMatchers():void","kind":"method","access":"public","line":19,"leaves":[20]}]}]},{"kind":"package","name":"util","classes":[{"name":"ExtraMatchers","kind":"class","access":"public","line":17,"children":[{"name":"hasFirstMethodInStackTrace(String):Assertor","kind":"method","access":"public","static":true,"line":20,"leaves":[20]},{"name":"hasMethodInStackTraceAt(int,String):Assertor","kind":"method","access":"public","static":true,"line":60,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":61,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":65,"children":[{"name":"throwable","kind":"null","access":"default","local":true,"line":65,"leaves":[65]}]}],"leaves":[61]}],"leaves":[60,61]}]}]}],"classes":[{"name":"TestBase","kind":"class","access":"public","line":17,"children":[{"name":"messageContains(String):Assertor","kind":"method","access":"public","static":true,"line":58,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":59,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":60,"children":[{"name":"value","kind":"null","access":"default","local":true,"line":60,"leaves":[60]}],"leaves":[63]}],"leaves":[59]}],"leaves":[58,59]},{"name":"causeMessageContains(String):Assertor","kind":"method","access":"public","static":true,"line":68,"children":[{"name":"","kind":"class","access":"default","static":true,"local":true,"line":69,"children":[{"name":"assertValue(Throwable):void","kind":"method","access":"public","local":true,"line":70,"children":[{"name":"cause","kind":"null","access":"default","local":true,"line":71,"leaves":[71,71]},{"name":"value","kind":"null","access":"default","local":true,"line":70,"leaves":[70]}]}],"leaves":[69]}],"leaves":[68,69]}]}]}]}]}});
