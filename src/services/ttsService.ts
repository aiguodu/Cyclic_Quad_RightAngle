/**
 * TTS Service
 * 代理配置: 转发 /api/tts 至本地 localhost:3001
 * 后端接口由用户自行实现，前端仅提供调用结构。
 */

export class TTSService {
  private static instance: TTSService;
  private currentAudio: HTMLAudioElement | null = null;

  private constructor() {}

  public static getInstance(): TTSService {
    if (!TTSService.instance) {
      TTSService.instance = new TTSService();
    }
    return TTSService.instance;
  }

  /**
   * 播放 TTS 语音
   * @param text 需要朗读的文本
   */
  public async play(text: string): Promise<void> {
    this.stop(); // 播放前先停止当前的朗读

    if (!text) return;

    try {
      // 假设后端接口接收 text 参数并返回音频流
      // const response = await fetch('/api/tts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ text })
      // });
      
      // if (!response.ok) throw new Error('TTS request failed');
      
      // const blob = await response.blob();
      // const url = URL.createObjectURL(blob);
      // this.currentAudio = new Audio(url);
      // await this.currentAudio.play();
      
      console.log('Simulating TTS playback for:', text);
      // 模拟播放延迟
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error('TTS Playback Error:', error);
    }
  }

  /**
   * 停止当前朗读
   */
  public stop(): void {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
    console.log('TTS playback stopped.');
  }
}

export const ttsService = TTSService.getInstance();
