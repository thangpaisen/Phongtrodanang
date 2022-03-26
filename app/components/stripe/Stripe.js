import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native'
import PaymentScreen from './PaymentScreen'
const Stripe = () => {
    return (
        <StripeProvider
            publishableKey={'pk_test_oKhSR5nslBRnBZpjO6KuzZeX'}
            merchantIdentifier='merchant.identifier'
        >
            <PaymentScreen />
        </StripeProvider>
    )
}

export default Stripe

const styles = StyleSheet.create({})
