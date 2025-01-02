# FFMPEG

ffmpeg is a universal media converter. It can read a wide variety of inputs - including live grabbing/recording devices - filter, and transcode them into a plethora of output formats.

## Cut or Trim a Video

```
ffmpeg -i input.mp4 -ss 00:01:00 -to 00:02:00 -c copy output.mp4
```
- -i: Stands for input. This option specifies the input file that FFmpeg will process
- -ss: Start time (e.g., 1 minute).
- -to: End time (e.g., 2 minutes).
- -c copy: Copies streams without re-encoding.

## Convert a video to a different format

```
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 output.mp4
```
## Compress a Video

Reduce the size of a video:

```
ffmpeg -i input.mp4 -vcodec libx264 -crf 23 output.mp4

```
- -crf: Controls quality. Lower values mean better quality (ranges from 18–28).

## Change Video Resolution
Scale video to a specific resolution:

```
ffmpeg -i input.mp4 -vf scale=1280:720 output.mp4

```
- -vf: Stands for video filter. This option allows you to apply various filters to the video stream.
- scale=1280:720: This is a specific video filter that resizes the video to a resolution of 1280x720 pixels (commonly known as 720p HD).
- Replace 1280:720 with your desired width and height.

## Extract Audio from a Video
Save the audio track from a video file:
```
ffmpeg -i input.mp4 -q:a 0 -map a output.mp3
```
- -q:a: Stands for audio quality. This option is used to set the quality of the audio stream when encoding.

- -map a: Maps the audio stream from the input to the output.
