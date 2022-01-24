CD /D "%~dp0"
COPY /Y .\Source\CSS\C4.css .\Release\
CMD /K webpack --config-name Prod
PAUSE