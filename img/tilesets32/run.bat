for %%i in (*.png) do (
	magick convert %%i -scale 66.66%% %%i
)
