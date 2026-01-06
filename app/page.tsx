"use client";

import React, { useState, useEffect } from 'react';

export default function MishTeeDashboard() {
  const [isNavigating, setIsNavigating] = useState(false);

  // --- Theme Constants ---
  const colors = {
    brandOrange: '#FF6B00', // mishTee Orange
    successGreen: '#2E7D32',
    textDark: '#1A1A1A',
    textGray: '#666666',
    bgLight: '#F3F4F6',
    white: '#FFFFFF',
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#eeeeee', // Outer background for desktop view
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    }}>
      {/* INJECTING KEYFRAMES FOR PULSE ANIMATION 
        This allows us to keep everything in one file without external CSS files.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(46, 125, 50, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(46, 125, 50, 0); }
          100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(46, 125, 50, 0); }
        }
      `}} />

      {/* --- Mobile Container (Max Width 500px) --- */}
      <main style={{
        width: '100%',
        maxWidth: '500px',
        minHeight: '100vh',
        backgroundColor: colors.white,
        position: 'relative',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        
        {/* 1. Header Section */}
        <header style={{
          padding: '20px 24px',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
          zIndex: 10
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
              alt="mishTee Logo" 
              style={{ width: '60px', height: 'auto', objectFit: 'contain' }}
            />
            <div>
              <h1 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: colors.brandOrange,
                margin: 0,
                lineHeight: '1.2'
              }}>
                mishTee
              </h1>
              <span style={{ fontSize: '14px', color: colors.textGray, fontWeight: '500' }}>
                Delivery Mitra
              </span>
            </div>
          </div>

          {/* User Avatar Placeholder */}
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px'
          }}>
            🛵
          </div>
        </header>

        {/* 2. Status Bar */}
        <div style={{
          padding: '16px 24px',
          backgroundColor: '#E8F5E9', // Light green bg
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: colors.successGreen,
            borderRadius: '50%',
            animation: 'pulse-ring 2s infinite'
          }} />
          <span style={{
            color: colors.successGreen,
            fontWeight: '600',
            fontSize: '14px'
          }}>
            Agent Online
          </span>
        </div>

        {/* 3. Main Content Area */}
        <div style={{
          padding: '24px',
          flex: 1,
          backgroundColor: colors.bgLight
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: colors.textDark,
            marginBottom: '16px'
          }}>
            Current Task
          </h2>

          {/* Task Card */}
          <div style={{
            backgroundColor: colors.white,
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            marginBottom: '24px'
          }}>
            {/* Customer Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: colors.textGray, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Deliver To
                </p>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: colors.textDark }}>
                  Arjun Mehta
                </h3>
              </div>
              <div style={{ 
                backgroundColor: '#FFF3E0', 
                color: colors.brandOrange, 
                padding: '4px 12px', 
                borderRadius: '20px', 
                fontSize: '12px',
                fontWeight: '600',
                height: 'fit-content'
              }}>
                #ORD-8921
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '0 0 16px 0' }} />

            {/* Address Details */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '20px' }}>
              <span style={{ fontSize: '18px' }}>📍</span>
              <p style={{ margin: 0, fontSize: '14px', color: colors.textGray, lineHeight: '1.5' }}>
                Flat 402, Green Valley Apartments,<br />
                Sector 29, Gurgaon
              </p>
            </div>

            {/* Order Items Summary */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
               <span style={{ fontSize: '18px' }}>📦</span>
               <p style={{ margin: 0, fontSize: '14px', color: colors.textDark, fontWeight: '500' }}>
                 2 Items • Cash on Delivery: ₹450
               </p>
            </div>
          </div>
        </div>

        {/* 4. Bottom Action Area (Sticky) */}
        <div style={{
          padding: '20px 24px 40px 24px', // Extra padding bottom for safe areas
          backgroundColor: colors.white,
          borderTop: '1px solid #f0f0f0',
          position: 'sticky',
          bottom: 0
        }}>
          <button 
            onClick={() => setIsNavigating(!isNavigating)}
            style={{
              width: '100%',
              backgroundColor: isNavigating ? colors.successGreen : colors.brandOrange,
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '18px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 6px rgba(255, 107, 0, 0.2)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{isNavigating ? '📍 Navigating...' : '🚀 Start Navigation'}</span>
          </button>
        </div>

      </main>
    </div>
  );
}
