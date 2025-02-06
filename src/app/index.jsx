import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

// Mock data
const jobData = {
  featured: {
    company: "Pinterest, Inc.",
    location: "California, USA",
    position: "Motion Designer",
    type: "Senior • Fulltime • Remote",
    salary: "$7K/Month"
  },
  recent: {
    company: "Google",
    position: "Product Designer",
    location: "California, USA",
    type: "Senior • Fulltime • Remote",
    salary: "$5K/Month",
    timePosted: "12 Minute Ago",
    responsibilities: [
      "Deliver a well-crafted design that follows standard for consistency in quality and experience.",
      "Design creative solutions that deliver not only value customer but also solve business objectives.",
      "You are also required to contribute to the design and critics, conceptual discussion, and also maintaining consistency of design system."
    ],
    skills: ["Lead", "UX Design", "Problem Solving", "Critical"]
  }
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSmallText}>Hello</Text>
          <Text style={styles.headerTitle}>Leslie Alexander</Text>
        </View>
        <Text style={styles.iconPlaceholder}>🔔</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search job, company, etc.."
          placeholderTextColor="#666"
        />
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Recommendations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommendation</Text>
          
          <View style={styles.jobCard}>
            <View style={styles.jobCardHeader}>
              <View style={styles.companyInfo}>
                <View style={styles.companyLogo}>
                  <Text style={styles.companyInitial}>P</Text>
                </View>
                <View>
                  <Text style={styles.companyName}>{jobData.featured.company}</Text>
                  <Text style={styles.locationText}>{jobData.featured.location}</Text>
                </View>
              </View>
              <Text style={styles.iconPlaceholder}>🔖</Text>
            </View>

            <Text style={styles.positionTitle}>{jobData.featured.position}</Text>
            <Text style={styles.jobType}>{jobData.featured.type}</Text>

            <View style={styles.jobCardFooter}>
              <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
              <Text style={styles.salaryText}>{jobData.featured.salary}</Text>
            </View>
          </View>
        </View>

        {/* Recent Jobs */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Job List</Text>
          
          <View style={styles.jobCard}>
            <View style={styles.jobCardHeader}>
              <View style={styles.companyInfo}>
                <View style={[styles.companyLogo, styles.googleLogo]}>
                  <Text style={styles.companyInitial}>G</Text>
                </View>
                <View>
                  <Text style={styles.companyName}>{jobData.recent.position}</Text>
                  <Text style={styles.jobType}>{jobData.recent.type}</Text>
                </View>
              </View>
              <Text style={styles.timePosted}>{jobData.recent.timePosted}</Text>
            </View>

            <View style={styles.jobCardFooter}>
              <Text style={styles.salaryText}>{jobData.recent.salary}</Text>
              <Text style={styles.iconPlaceholder}>🔖</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>📊</Text>
        <Text style={styles.navIcon}>🔖</Text>
        <Text style={styles.navIcon}>👤</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4169e1',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerSmallText: {
    color: '#fff',
    fontSize: 14,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    backgroundColor: '#4169e1',
    padding: 20,
    paddingTop: 0,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    paddingLeft: 40,
    fontSize: 16,
  },
  searchIcon: {
    position: 'absolute',
    left: 32,
    top: 12,
    zIndex: 1,
  },
  content: {
    flex: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  jobCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  jobCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffebee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleLogo: {
    backgroundColor: '#f5f5f5',
  },
  companyInitial: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e53935',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationText: {
    color: '#666',
    fontSize: 14,
  },
  positionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  jobType: {
    color: '#666',
    marginBottom: 16,
  },
  jobCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#4169e1',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  salaryText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timePosted: {
    color: '#666',
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navIcon: {
    fontSize: 24,
  },
  iconPlaceholder: {
    fontSize: 24,
  },
});

export default App;