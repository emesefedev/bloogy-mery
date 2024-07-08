import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Text, View, StyleSheet, Image } from 'react-native' 

export default function Index() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#fff6ad', dark: '#fff6ad' }}
    headerImage={
      <Image
        source={require('@/assets/images/bloody-mery-logo.png')}
        style={styles.reactLogo}
      />
    }>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Welcome to Bloogy Mery</Text>

        <>
          <Text style={styles.text}>
            ¡Hola y bienvenido a Bloogy Mery! Nos emociona tenerte aquí en nuestra vibrante comunidad. En Bloogy Mery, hemos creado un espacio donde las ideas fluyen libremente y todos pueden compartir sus historias, experiencias y conocimientos a través de posts de blog.
          </Text>

          <Text style={styles.text}>
            En Bloogy Mery creemos en el poder de las palabras y el impacto que pueden tener en nuestras vidas. Ya seas un escritor experimentado o alguien que acaba de descubrir su pasión por la escritura, encontrarás aquí un lugar donde tu voz será escuchada y valorada. Nuestra plataforma está diseñada para que puedas publicar tus artículos fácilmente y llegar a una audiencia ávida de nuevas perspectivas y contenidos.
          </Text>

          <Text style={styles.text}>
            Nos esforzamos por ofrecer una amplia gama de temas que reflejen los intereses y pasiones de nuestra comunidad. Desde moda y belleza, hasta bienestar, tecnología y artes, hay un espacio para cada voz y cada historia. Queremos que Bloogy Mery sea tu fuente de inspiración diaria, un lugar donde puedas descubrir nuevos puntos de vista y aprender algo nuevo cada día.
          </Text>

          <Text style={styles.text}>
            Además de ser un lugar para leer y escribir, Bloogy Mery es una comunidad. Fomentamos la interacción y el apoyo mutuo entre nuestros miembros. Te animamos a comentar en los posts, compartir tus opiniones y conectar con otros escritores y lectores. Creemos que juntos podemos crear un entorno enriquecedor y solidario donde todos puedan crecer y prosperar.
          </Text>

          <Text style={styles.text}>
            Gracias por unirte a nosotros en esta emocionante aventura. Esperamos que disfrutes de tu tiempo en Bloogy Mery y que encuentres inspiración, motivación y, sobre todo, una comunidad acogedora que valore tus contribuciones. ¡Estamos deseando leer tus historias y compartir este viaje contigo!
          </Text>

          <Text style={styles.text}>
            Con gratitud y entusiasmo,
          </Text>

          <Text style={styles.text}>
            El equipo de Bloogy Mery
          </Text>
        </>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25
  },

  textTitle: {
    fontSize: 50,
    color: '#fff',
    fontFamily: 'Roboto'
  },

  text: {
    width: '100%',
    fontSize: 18,
    textAlign: 'justify',
    color: '#fff',
    fontFamily: 'Roboto'
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  }
});