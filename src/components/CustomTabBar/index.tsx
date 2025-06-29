import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Colors } from '../../constants/Colors'
import { Iconify } from 'react-native-iconify'

const getTabIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? '#007AFF' : '#8E8E93'
  const iconSize = 24
  
  switch (routeName) {
    case 'Home':
      return <Iconify icon="mdi:home" size={iconSize} color={iconColor} />
    case 'Profile':
      return <Iconify icon="mdi:account" size={iconSize} color={iconColor} />
    case 'Settings':
      return <Iconify icon="mdi:cog" size={iconSize} color={iconColor} />
    case 'Notifications':
      return <Iconify icon="mdi:bell" size={iconSize} color={iconColor} />
    default:
      return <Iconify icon="mdi:cellphone" size={iconSize} color={iconColor} />
  }
}

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const animatedValues = React.useRef(
    state.routes.map(() => new Animated.Value(0))
  ).current

  React.useEffect(() => {
    animatedValues.forEach((animValue, index) => {
      Animated.timing(animValue, {
        toValue: state.index === index ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start()
    })
  }, [state.index])

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label = options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          // Animation values
          const scale = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.1],
          })

          const translateY = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0, -2],
          })

          const iconOpacity = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.6, 1],
          })
          const backgroundColor = isFocused ? Colors.activeTab : Colors.inactiveTab

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.tab}
              activeOpacity={0.7}
            >
              <Animated.View
                style={[
                  styles.tabContent,
                  {
                    backgroundColor,
                    transform: [{ scale }, { translateY }],
                  },
                ]}
              >
                <Animated.View
                  style={[
                    styles.iconContainer,
                    {
                      opacity: iconOpacity,
                    },
                  ]}
                >
                  {getTabIcon(route.name, isFocused)}
                </Animated.View>
                
                {isFocused && (
                  <Animated.View style={styles.activeDot} />
                )}
              </Animated.View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'transparent',
  },
  tabContainer: {
    position: 'absolute',
    bottom: 30, 
    left: 0,
    right: 0,
    borderRadius: 35,
    borderWidth: 0.0000001,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 30,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
  },
  tabContent: {
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50, // Perfect circle
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#007AFF',
    position: 'absolute',
    bottom: 5,
  },
})

export default CustomTabBar