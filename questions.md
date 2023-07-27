======================================================================
SQL vs NoSQL?

=======================================================================
API? 
=======================================================================
Sync vs Async?
SYNC one statement processed after another: line by line
Each line of code reads until executed before continuing to next line...
= SYNC = BLOCKING CODE => can lead to problems (line by line)

ASYNC: => Non-blocking code 
Better way and preferred way of coding for serverside

e.g.: readFileSync vs readFile 
=> Use ASYNC code
Users requests can be processed w/out blocking to allow callbacks while requests are being processed in the back and presented once data avail. 
Async code executed whilst further line being still processed
=> different order => challenge to make code work same nomatter different orders. 

=========================================================================
UTF-8? => dominant character encoding => 8 bites - Unicode Transformation Bit
Way of transforming => data in 0/1 ... => way of encoding
Incompatibility => between characters for different encoding
=> Vital to encode in the same way

==========================================================================

