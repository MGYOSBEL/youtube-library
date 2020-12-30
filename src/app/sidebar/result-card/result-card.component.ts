import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../../search/Models/SearchResult.model';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input()
  result?: SearchResult = {
    id: 'SOj64CrWYY8',
    title: '¿Qué es la Integración Continua? | Diferencias CI/CD',
    description: '🔥 ¡Aprovecha la oferta del Black Friday de CodelyTV Pro!\n⮕ https://codely.tv/pro/blackfriday?utm_source=youtube&utm_medium=social&utm_campaign=black_friday-20&utm_content=video_description\n--- Aprende cómo la Integración Continua (CI), la Entrega Continua (CD) y el Despliegue Continuo (CD también 😅) pueden ayudarte a entregar software de más calidad más rápidamente.\n\n🔗 Enlaces relacionados:\n├ 💻 Curso Integración Continua: http://bit.ly/curso-gh-actions\n└ 💸 Oferta lanzamiento curso Zsh: http://bit.ly/oferta-zsh\n\n{▶️} CodelyTV\n├ 🎥 Suscríbete: https://youtube.com/c/CodelyTV?sub_confirmation=1\n├ 🐦 Twitter CodelyTV: https://twitter.com/CodelyTV\n├ 📸 Instagram: https://instagram.com/CodelyTV\n├ ℹ️ LinkedIn: https://linkedin.com/company/codelytv\n├ 𝐟 Facebook: https://facebook.com/CodelyTV\n├ 💂‍♂️ Twitter Rafa: https://twitter.com/rafaoe\n├ 👨🏻 Twitter Javi: https://twitter.com/JavierCane\n└ 📕 Catálogo cursos: https://bit.ly/cursos-codely',
    thumbnailUrl: 'https://i.ytimg.com/vi/SOj64CrWYY8/default.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=SOj64CrWYY8' };

  constructor() { }

  ngOnInit(): void {
  }

}
