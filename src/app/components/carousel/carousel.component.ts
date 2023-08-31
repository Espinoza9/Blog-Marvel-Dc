import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems = [
    { title: 'Capitão América',descricao:'O Capitão América, também conhecido como Steve Rogers, é um herói da Marvel Comics.\n Ele era um jovem frágil e com problemas de saúde, mas se voluntariou para um experimento que o transformou em um \nsuper-soldado durante a Segunda Guerra Mundial. Com seu escudo indestrutível e habilidades físicas aprimoradas,\n ele luta pela justiça, liberdade e valores americanos, sendo um símbolo de coragem e honra' , imageUrl: '../../../../../../assets/capitao-america.webp' },
    { title: 'Batman',descricao:'Batman, também chamado de Bruce Wayne, é um famoso super-herói que apareceu pela primeira vez em 1939. \n Diferente por não ter superpoderes, ele confia em sua inteligência, habilidades físicas e tecnologia para combater o crime em Gotham City.\n Motivado pela tragédia da morte de seus pais, Bruce Wayne se transforma no Batman. \n Sua icônica imagem de morcego no traje preto é reconhecida mundialmente. \n Ele enfrenta vilões como o Coringa e a Mulher-Gato, explorando temas de justiça e luta interior.', imageUrl: '../../../assets/batman2.webp' },
    { title: 'Homem De Ferro',descricao:'Homem de Ferro, alter ego de Tony Stark, é um famoso super-herói.\n Ele se destaca por sua inteligência e por ter construído uma armadura tecnológica avançada que lhe concede habilidades sobre-humanas. \n Stark, um gênio inventor e bilionário, usa sua armadura para combater o mal e proteger o mundo.\n Sua jornada é marcada por desenvolvimento tecnológico, dilemas éticos e evolução pessoal. \n O Homem de Ferro é um pilar proeminente do Universo Marvel, conhecido por sua perspicácia e seu senso de humor único.' ,imageUrl: '../../../assets/ironman_PNG69.png' },
    { title: 'Hulk', descricao:'Hulk, também conhecido como Bruce Banner, é um poderoso herói da Marvel.\n Devido a um acidente com radiação, ele se transforma em uma criatura gigante e incrivelmente forte sempre que fica com raiva.\n Essa transformação é um reflexo de suas emoções. O Hulk é um membro complexo dos Vingadores e lida com o desafio\n de controlar sua força enquanto busca equilíbrio entre suas duas identidades: Bruce e a fera verde.\n Sua história explora temas de controle emocional e responsabilidade.',imageUrl: '../../../assets/hulk-png2.webp' },
    { title: 'Mulher Maravilha', descricao:'Mulher-Maravilha, também conhecida como Diana Prince, é uma icônica heroína da DC Comics.\n Ela é uma guerreira amazona com habilidades sobre-humanas, treinada para a batalha desde jovem. \n Com seu laço da verdade e braceletes indestrutíveis, a Mulher-Maravilha luta pela justiça e paz no mundo. \n Sua história destaca sua origem mítica na ilha paradisíaca de Themyscira e sua jornada para entender e proteger a humanidade. \n Ela é um símbolo de empoderamento feminino e heroísmo.',imageUrl: '../../../assets/mulher-maravilha9.webp' },
    { title: 'Homem Aranha',descricao:'Homem-Aranha, também conhecido como Peter Parker, é um famoso super-herói da Marvel. \n Ele adquiriu poderes de aranha após ser picado por uma aranha geneticamente modificada.\n  Peter combina agilidade, força e a habilidade de escalar paredes com seu engenho e  inteligência para combater \n criminosos em Nova Iorque. Sua história é marcada por desafios pessoais e responsabilidades duplas como estudante e herói.\n O Homem-Aranha é querido por sua relatabilidade e senso de humor,\n sendo um dos personagens mais reconhecíveis e adorados da cultura pop.', imageUrl: '../../../assets/R.png' },
    { title: 'Doutor Estranho',descricao:'Doutor Estranho, também conhecido como Stephen Strange, é um notável herói da Marvel. Ele era um cirurgião arrogante que perdeu \n o uso das mãos em um acidente de carro, levando-o a buscar a cura nas artes místicas. Treinado por anciãos mágicos, \n Strange se torna um feiticeiro poderoso, capaz de manipular a realidade e enfrentar ameaças sobrenaturais. Sua jornada envolve a \n transformação de um egocêntrico médico em um guardião das dimensões mágicas. O Doutor Estranho é reconhecido por seu manto vermelho,\n amuleto do olho de Agamotto e pelos efeitos visuais deslumbrantes que acompanham suas habilidades místicas.', imageUrl: '../../../assets/MCU-Doctor-Strange-PNG-Free-Download.png' },
    { title: 'Flash', descricao:'Flash, também conhecido como Barry Allen, é um icônico super-herói da DC Comics.\n Após ser atingido por um raio e produtos químicos, ganhou a habilidade de correr em velocidades incríveis. \n Ele se tornou o defensor de Central City, usando sua supervelocidade para combater vilões e salvar vidas. \n Barry é conhecido por seu traje vermelho e por ser um membro central da Liga da Justiça.\n Sua história explora o equilíbrio entre suas responsabilidades como cientista forense e seu papel como herói veloz.\n O Flash é um símbolo de esperança e rapidez no universo dos quadrinhos.',imageUrl: '../../../assets/justicev.png' },
    { title: 'Wolverine',descricao:'Wolverine, também chamado de Logan, é um famoso herói da Marvel.\n Ele possui garras retráteis de adamantium, um metal indestrutível, e a capacidade de regeneração acelerada,\n o que lhe permite se curar rapidamente de ferimentos. Com um passado misterioso e tumultuado, Wolverine é conhecido por sua natureza feroz e atitude anti-herói.\n Ele é um membro dos X-Men e tem uma relação próxima com outros personagens do universo Marvel, como o Professor Xavier e Jean Grey.\n Wolverine é reconhecido por seu traje amarelo e suas garras icônicas, tornando-se um dos personagens mais emblemáticos dos quadrinhos.', imageUrl: '../../../assets/wolverine_PNG19.png' },

    // Add more items as needed
  ];
  currentItemIndex = 0;
  disablePreviousButton=true;
  
  navigate(direction: number): void {
    const newIndex = this.currentItemIndex + direction;
    if (newIndex >= 0 && newIndex < this.carouselItems.length) {
      this.currentItemIndex = newIndex;
    }
  
    // Adicionar essa parte para desabilitar o botão "Previous" quando estiver na primeira página
    if (this.currentItemIndex === 0) {
      this.disablePreviousButton = true;
    } else {
      this.disablePreviousButton = false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
