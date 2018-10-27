import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  ImageBackground,
} from 'react-native';
import { WebBrowser } from 'expo';

import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ParallaxImage } from 'react-native-snap-carousel';
import { MonoText } from '../components/StyledText';

import { createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Appbar, Text, Surface } from 'react-native-paper'
import { List, ListItem } from 'react-native-elements'
import GridView from 'react-native-super-grid';
import Edamam from '../lib/edamam.js'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

/*const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
];*/

import { BottomNavigation } from 'react-native-paper';

class RecipeGridScreen extends React.Component {
  render() {

    let { entries } = this.props 
    entries = entries || []
    // Taken from https://flatuicolors.com/

    return (
      <GridView
        itemDimension={130}
        items={entries}
        style={gridStyles.gridView}
        renderItem={entry => (
          <ImageBackground source={{ uri: entry.illustration}} style={[gridStyles.itemContainer, { backgroundColor: 'lightgrey' }]} imageStyle={{ borderRadius: 5}} >
            <Text style={gridStyles.itemName}>{entry.title}</Text>
            <Text style={gridStyles.itemCode}>{entry.subtitle}</Text>
          </ImageBackground>
        )}
      />
    );
  }
}

const gridStyles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});


class RecipeListScreen extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        slider1ActiveSlide: 1,
        //entries: []
    };   
  }

  _renderRow ({ item }) {
    return (
      <ListItem
       titleStyle={{fontWeight: 'bold' }}
        title={item.title}
        subtitle={item.subtitle}
        avatar={{uri:item.illustration}}
      />
    )
  }

  render() {

    let { entries } = this.props
    entries = entries || []

    return (
      <View styles={styles.listContainer}>
        <List>
          <FlatList 
            data={entries.map((entry, i) => { return { key: i+'', ...entry } } )} 
            renderItem={this._renderRow} 
          />
        </List>
      </View>
    )
  }
}

class SliderEntry extends React.Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;
        return parallax ? (
          <ParallaxImage
            source={{ uri: illustration }}
            containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
            style={styles.image}
            parallaxFactor={0.35}
            showSpinner={true}
            spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
            {...parallaxProps}
          />
        ) : (
          <Image
            source={{ uri: illustration }}
            style={styles.image}
          />
        );
    }

    render () {
        const { data: { title, subtitle }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.titleEntry, even ? styles.titleEvenEntry : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
          
          <TouchableOpacity activeOpacity={1} style={styles.slideInnerContainer} onPress={ () => { alert(`You've clicked '${title}'`); } }>
              <View style={styles.shadow} />
              <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                  { this.image }
                  
                  <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
              </View>
              <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                  { uppercaseTitle }
                  <Text style={[styles.subtitleEntry, even ? styles.subtitleEvenEntry : {}]} numberOfLines={2}>
                      { subtitle }
                  </Text>
              </View>
          </TouchableOpacity>

        );
    }
}


class SuggestScreen1 extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1,
      entries: [],
    };   
  }

  async componentDidMount() {

    const { navigation } = this.props;
    const edamamParams = navigation.getParam('edamamParams', { ingredients: 'chicken'});
    this.edamam = new Edamam(edamamParams)
    await this._displayRecipes(0, 10)

  }

  async _displayRecipes(from, to) {

    let recipes = await this.edamam.recipes(from, to)
    this.setState({ entries: recipes })

  }
    
  _renderItem ({item, index}) {
    return (<SliderEntry data={item} even={(index + 1) % 2 === 0} />)
  }

  render() {

    let { entries } = this.props
    entries = entries || []

    return (
      <View style={styles.container}>
        <View style={styles.exampleContainer}>
          <Carousel
            data={entries}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            inactiveSlideScale={0.95}
            inactiveSlideOpacity={1}
            enableMomentum={true}
            activeSlideAlignment={'start'}
            containerCustomStyle={styles.slider}
            contentContainerCustomStyle={styles.sliderContentContainer}
            activeAnimationType={'spring'}
            activeAnimationOptions={{
                friction: 4,
                tension: 40
            }}
          />
        </View>
      </View>
    )
  }

}

export default createMaterialTopTabNavigator({

  'Recipe Carousel': { screen: SuggestScreen1 },
  RecipeGrid: { screen: RecipeGridScreen },
  RecipeList: { screen: RecipeListScreen },

}, {

  lazy: true,
  swipeEnabled: true,
  
});

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
  },
  listContainer: { 
    flex: 1, 
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  item: {
  },
  /*
  gradient: {
      ...StyleSheet.absoluteFillObject
  },
  */
  slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
  },
  scrollview: {
      flex: 1
  },
  exampleContainer: {
      paddingVertical: 10,
     // backgroundColor: 'black',
  },

  exampleContainerLight: {
      backgroundColor: 'white'
  },
  title: {
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      color: 'rgba(255, 0, 255, 0.9)',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
  },

  subtitle: {
      marginTop: 5,
      paddingHorizontal: 30,
      backgroundColor: 'transparent',
      color: 'rgba(255, 255, 0, 0.75)',
      fontSize: 13,
      fontStyle: 'italic',
      textAlign: 'center'
  },
  slider: {
      marginTop: 15,
      overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
      paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
      paddingVertical: 8
  },
  paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 8
  },
  shadow: {
      position: 'absolute',
      top: 0,
      left: itemHorizontalMargin,
      right: itemHorizontalMargin,
      bottom: 18,
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      borderRadius: entryBorderRadius
  },
   image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'cover',
      borderRadius: 0,
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  imageContainer: {
      flex: 1,
      marginBottom:  -1, // Prevent a random Android rendering issue
      backgroundColor: '#000',
      borderTopLeftRadius: entryBorderRadius,
      borderTopRightRadius: entryBorderRadius
  },
  imageContainerEven: {
      backgroundColor: '#000'
  },
   // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: entryBorderRadius,
      backgroundColor: 'white',

  },
  titleEntry: {
      color: '#fff',
      fontSize: 13,
      fontWeight: 'bold',
      letterSpacing: 0.5
  },
  titleEvenEntry: {
      color: '#fff'
  },
  subtitleEntry: {
      marginTop: 6,
      color: '#aaf',
      fontSize: 12,
      fontStyle: 'italic'
  },
  subtitleEvenEntry: {
      color: 'rgba(255, 255, 255, 0.7)'
  },
  textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: '#000',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: '#000'
},


});
