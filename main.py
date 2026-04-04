from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from plyer import tts

class UngDung(App):
    def build(self):
        khung = BoxLayout(orientation='vertical', padding=20)
        tieude = Label(text="Ngoc Tram TTS", font_size='24sp', size_hint=(1, 0.3))
        nutbam = Button(text="Phat Truyen", font_size='20sp', size_hint=(1, 0.4))
        nutbam.bind(on_press=self.doc)
        self.nhan = Label(text="San sang...", font_size='16sp', size_hint=(1, 0.3))
        khung.add_widget(tieude)
        khung.add_widget(nutbam)
        khung.add_widget(self.nhan)
        return khung

    def doc(self, obj):
        try:
            self.nhan.text = "Dang phat am..."
            tts.speak("Tiếng sáo trúc vang vọng. Chào mừng đạo hữu.")
        except Exception as e:
            self.nhan.text = "Loi phat am"

chay = UngDung()
chay.run()

