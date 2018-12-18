import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objetoFeed = {
      titulo:"Harly Carreiro",
      data: "November 5, 1955",
      descricao:"Estou criando um app incrível...",
      qtdLikes:12,
      qtdComments:4,
      timeComment:"11h ago"
  }

  public listaFilmes = new Array<any>();

  //string, number, any
  public nomeUsuario:string = "Harly Carreiro - Código";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    //alert(num1+num2)
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99)
    this.movieProvider.getLatestMovies().subscribe(
      data=>{

/*          //transforma a resposta em um obj qualquer tipo
        const response = (data as any);
        //transforma em JSON
        const objetoRetorno = JSON.parse(response._body); 

        this.listaFilmes = objetoRetorno.results;
        console.log((objetoRetorno)); */


        this.listaFilmes = (data as any).results;
        console.log((data));  
      },
      error=>{
        console.log(error);
      }
    )
  }

}
