import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRouter} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

// styles
import styles from '@/styles/generalStyles';

// images
import heroImage from '@/assets/images/pages/landingpageimage.jpg';

// components
import NavbarPublic from '@/components/NavbarPublic'
import FooterPublic from "@/components/FooterPublic";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <NavbarPublic />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 70 }}
      >
        <View style={styles.contentBody}>
          <View style={styles.row}>
            <View style={styles.column}>
              <View style={styles.card}>
                <View style={styles.cardBody}>
                  <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <Text style={[styles.cardBodyHeading, styles.textSecondary]}>Unmatched Aesthetics - only with Ztyle</Text>
                        <Text style={styles.cardBodyText}>
                          Eliminate long wait times and scheduling challenges with Ztyle.                                          
                          Our platform allows you to effortlessly book appointments at your preferred salons with just a few taps.                                          
                          Whether you desire a fresh haircut, a rejuvenating spa experience, or a complete makeover, we have you covered.
                        </Text>
                        <Text style={styles.cardBodyText}>
                          Select from a curated list of top salons in your area, find a time that suits your schedule, and secure your appointment—all from the comfort of your home.
                          Experience the ultimate in convenience, style, and self-care with Ztyle.
                        </Text>
                      
                    </View>
                  </View>
                  <View style={styles.card}>
                    <View style={styles.cardBody}>
                      <Image
                        source={heroImage}
                        style={styles.imageFluid}
                        resizeMode='cover'
                      />
                      <Text style={styles.cardBodySubHeading}>Beauty Bookings, Made Easy</Text>
                    </View>
                  </View>
                  <View style={styles.card}>
                    <View style={styles.cardBody}>
                      <Text style={[styles.cardBodySubHeading, styles.textCenter]}>Start Our Journey</Text>
                      <View style={styles.buttonContainer}>
                        <TouchableOpacity
                          style={[styles.buttonLink, styles.secondary]}
                          onPress={() => router.replace('/(auth)/RegisterUser')}
                        >
                          <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                                            
                        <TouchableOpacity
                          style={[styles.buttonLink, styles.secondaryBeautician]}
                          onPress={() => router.replace('/(auth)/RegisterBeautician')}
                        >
                          <Text style={styles.buttonText}>Join As Beautician</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <FooterPublic />
      </ScrollView>
    </SafeAreaView>
  );
}

   