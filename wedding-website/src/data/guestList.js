export const guestList = [
    // --- Groom's Side ---

    // Family - Main
    {
        id: 'g_fam_1',
        side: 'groom',
        members: [
            { name: 'Mom', id: 'm_1' },
            { name: 'Baba', id: 'b_1' },
            { name: 'Mama', id: 'm_2' }, // "BaBa" from user list, maintaining capitalization
            { name: 'Sheharyar Khan', id: 'sk_1' },
        ],
        maxPlusOnes: 0,
    },
    {
        id: 'g_fam_2',
        side: 'groom',
        members: [{ name: 'Aftab Khan', id: 'ak_1' }],
        maxPlusOnes: 0,
    },
    // Mona Ahmed Family
    {
        id: 'g_fam_3',
        side: 'groom',
        members: [
            { name: 'Mona Ahmed', id: 'ma_1' },
            { name: 'Ahmed Uncle', id: 'au_1' },
            { name: 'Yusuf Ahmed', id: 'ya_1' },
            { name: 'Alisha Ahmed', id: 'aa_1' },
            { name: 'Myra Ahmed', id: 'my_1' },
            { name: 'Reja Ahmed', id: 'ra_1' },
        ],
        maxPlusOnes: 0,
    },
    // Afsheen Khala Family
    {
        id: 'g_fam_4',
        side: 'groom',
        members: [
            { name: 'Afsheen Khala', id: 'afk_1' },
            { name: 'Ikram Burney', id: 'ib_1' },
            { name: 'Eiman Burney', id: 'eb_1' },
            { name: 'Rayyan Burney', id: 'rb_1' },
            { name: 'Zain Burney', id: 'zb_1' },
            { name: 'Mashal Burney', id: 'mb_1' },
        ],
        maxPlusOnes: 0,
    },
    // Tajwer Mirza Family
    {
        id: 'g_fam_5',
        side: 'groom',
        members: [
            { name: 'Tajwer Mirza', id: 'tm_1' },
            { name: 'Aly Mirza', id: 'am_1' },
        ],
        maxPlusOnes: 0,
    },
    // Samra Fahd Family
    {
        id: 'g_fam_6',
        side: 'groom',
        members: [
            { name: 'Samra Fahd', id: 'sf_1' },
            { name: 'Fahd Javed', id: 'fj_1' },
            { name: 'Ibrahim Javed', id: 'ij_1' },
            { name: 'Hasan Javed', id: 'hj_1' },
            { name: 'Sara Javed', id: 'sj_1' },
            { name: 'Rayyan Javed', id: 'rj_2' }, // Specify unique ID
        ],
        maxPlusOnes: 0,
    },
    // Siraj Quadar Family
    {
        id: 'g_fam_7',
        side: 'groom',
        members: [
            { name: 'Siraj Quadar', id: 'sq_1' },
            { name: 'Farah Siraj', id: 'fs_1' },
        ],
        maxPlusOnes: 0,
    },
    // Mishal Quadar Khan Family
    {
        id: 'g_fam_8',
        side: 'groom',
        members: [
            { name: 'Mishal Quadar Khan', id: 'mqk_1' },
            { name: 'Ummer Khan', id: 'uk_1' }, // Note: Duplicate name risk with Bride's side Umer Khan, but distinct here.
        ],
        maxPlusOnes: 0,
    },
    // Nimrah Quadar Khan Family
    {
        id: 'g_fam_9',
        side: 'groom',
        members: [
            { name: 'Nimrah Quadar Khan', id: 'nqk_1' },
            { name: 'Summayyah', id: 'sum_1' },
            { name: 'Saad Khan', id: 'sak_1' },
        ],
        maxPlusOnes: 0,
    },
    // Meraj Quadar Family
    {
        id: 'g_fam_10',
        side: 'groom',
        members: [
            { name: 'Meraj Quadar', id: 'meq_1' },
            { name: 'Shazia Quadar', id: 'shq_1' },
            { name: 'Zain Quadar', id: 'zq_1' },
            { name: 'Saleha Shamim', id: 'ssm_1' },
        ],
        maxPlusOnes: 0,
    },
    // Ishaq Khan & Fatima Quadar Khan (Couple)
    {
        id: 'g_couple_1',
        side: 'groom',
        members: [
            { name: 'Ishaq Khan', id: 'iq_1' },
            { name: 'Fatima Quadar Khan', id: 'fqk_1' },
        ],
        maxPlusOnes: 0,
    },
    // Noor Quadar Khan & Daniyal Khan (Couple)
    {
        id: 'g_couple_2',
        side: 'groom',
        members: [
            { name: 'Noor Quadar Khan', id: 'nqk_2' },
            { name: 'Daniyal Khan', id: 'dk_1' },
        ],
        maxPlusOnes: 0,
    },
    // Mahnoor Baji
    {
        id: 'g_fam_11',
        side: 'groom',
        members: [
            { name: 'Mahnoor Baji', id: 'mbj_1' },
            { name: 'David (Aquaman)', id: 'dav_1' },
            { name: 'Akhtar Uncle', id: 'au_1' },
            { name: 'Bilal Bhai', id: 'bb_1' }
        ],
        maxPlusOnes: 0,
    },
    // Samia Baji Family (Kids +3)
    {
        id: 'g_fam_14',
        side: 'groom',
        members: [
            { name: 'Samia Baji', id: 'sb_1' },
            { name: 'Faisal Bhai', id: 'fb_1' },
        ],
        maxPlusOnes: 3,
    },
    // Shan Bhai Family
    {
        id: 'g_fam_15',
        side: 'groom',
        members: [
            { name: 'Shan Bhai', id: 'shb_1' },
            { name: 'Seemi Baji', id: 'seb_1' },
            { name: 'Ayah', id: 'ayah_1' },
        ],
        maxPlusOnes: 0,
    },
    // Shijju Bhai (Wife + Daughters)
    // User says: "Shujju bhai's name and then he can add upto 3 plus ones"
    {
        id: 'g_fam_16',
        side: 'groom',
        members: [{ name: 'Shujju Bhai', id: 'shuj_1' }],
        maxPlusOnes: 3,
    },

    // Faaris & Hamza Syed
    {
        id: 'g_fam_17',
        side: 'groom',
        members: [
            { name: 'Faaris Syed', id: 'fs_3' },
            { name: 'Hamza Syed', id: 'hs_2' },
            { name: 'Ali Syed', id: 'as_2' },
            { name: 'Nausheen Syed', id: 'ns_2' },
            { name: 'Safwaan Syed', id: 'ss_2' }
        ],
    },

    {
        id: 'g_fam_18',
        side: 'groom',
        members: [
            { name: 'Omar Syed', id: 'os_1' },
            { name: 'Abia Syed', id: 'as_3' }
        ],
    },
    // --- Shaheer Friends (Groom) ---
    // Couple: Arjun & Melitza
    {
        id: 'g_friend_couple_1',
        side: 'groom',
        members: [
            { name: 'Arjun Bedi', id: 'gfc_1_1' },
            { name: 'Melitza Ortega', id: 'gfc_1_2' },
        ],
        maxPlusOnes: 0,
    },
    ...[
        'Jad Jaboom', 'Taranvir (T)', 'Umer Khan', 'Irfan Hamid', 'Shahmir Lodhi', 'Zaeem Amin', 'Samer Ahmed',
        'Yohaan Birje', 'Arnav Kamra', 'Andrew Robertson', 'Raj Rose', 'Abtin Olaee', 'Asim Godil', 'Ayan Longi', 'Ejaz Mohammed',
        'Shayan Hasan', 'Rishabh Kalyanakunmar', 'Aahil Ali'
    ].map((name, idx) => ({
        id: `g_friend_${idx}`,
        side: 'groom',
        members: [{ name, id: `gf_${idx}` }],
        maxPlusOnes: 0,
    })),


    // --- Bride's Side (Amna) ---

    // Umer Khan Family
    {
        id: 'b_fam_1',
        side: 'bride',
        members: [
            { name: 'Umer Khan', id: 'buk_1' },
            { name: 'Kanwal Khan', id: 'kk_1' },
            { name: 'Jannah Khan', id: 'jk_1' },
            { name: 'Amaan Khan', id: 'ak_2' },
            { name: 'Aafiyah Khan', id: 'afk_2' },
            { name: 'Shireen Khan', id: 'shk_1' },
            { name: 'Saghir Khan', id: 'sk_2' },
        ],
        maxPlusOnes: 0,
    },
    // Fahd Sharif Family
    {
        id: 'b_fam_2',
        side: 'bride',
        members: [
            { name: 'Fahd Sharif', id: 'fs_2' },
            { name: 'Sehr Sharif', id: 'ss_1' },
            { name: 'Azaan Sharif', id: 'az_1' },
            { name: 'Rayyan Sharif', id: 'rs_1' },
            { name: 'Sarah Sharif', id: 'sar_1' },
        ],
        maxPlusOnes: 0,
    },
    // Usman Khan Family
    {
        id: 'b_fam_3',
        side: 'bride',
        members: [
            { name: 'Usman Khan', id: 'usk_1' },
            { name: 'Safia Khan', id: 'saf_1' },
            { name: 'Eesa Khan', id: 'ees_1' },
            { name: 'Eman Khan', id: 'emk_1' },
        ],
        maxPlusOnes: 0,
    },
    // Dina Ali Family
    {
        id: 'b_fam_4',
        side: 'bride',
        members: [
            { name: 'Dina Ali', id: 'da_1' },
            { name: 'Faiyaz Ali', id: 'fa_1' },
            { name: 'Feroze Ali', id: 'fe_1' },
            { name: 'Zain Ali', id: 'za_1' },
        ],
        maxPlusOnes: 0,
    },
    // Sohail Rashid Family
    {
        id: 'b_fam_5',
        side: 'bride',
        members: [
            { name: 'Sohail Rashid', id: 'sr_1' },
            { name: 'Thalia Rashid', id: 'tr_1' },
            { name: 'Shaan Rashid', id: 'shr_1' },
            { name: 'Samed Asmer', id: 'sa_1' },
        ],
        maxPlusOnes: 0,
    },
    // Waseem Siddiqi Family
    {
        id: 'b_fam_6',
        side: 'bride',
        members: [
            { name: 'Waseem Siddiqi', id: 'ws_1' },
            { name: 'Amber Siddiqi', id: 'ams_1' },
            { name: 'Ammar Siddiqi', id: 'as_1' },
            { name: 'Dr Ahmer', id: 'drah_1' },
            { name: 'Eisha', id: 'ei_1' },
        ],
        maxPlusOnes: 3,
    },
    // Yasmin Wahid Family
    {
        id: 'b_fam_7',
        side: 'bride',
        members: [
            { name: 'Yasmin Wahid', id: 'yw_1' },
            { name: 'Hanna Wahid', id: 'hw_1' },
            { name: 'Ameera Wahid', id: 'aw_1' },
            { name: 'Hoor Wahid', id: 'how_1' },
            { name: 'Hassan Wahid', id: 'haw_1' },
        ],
        maxPlusOnes: 0,
    },
    // Hajra Khan Family
    {
        id: 'b_fam_8',
        side: 'bride',
        members: [
            { name: 'Hajra Khan', id: 'hk_1' },
            { name: 'Simra', id: 'sim_1' },
        ],
        maxPlusOnes: 0,
    },
    // Wajahat Shariff Family
    {
        id: 'b_fam_11',
        side: 'bride',
        members: [
            { name: 'Wajahat Shariff', id: 'wsh_1' },
            { name: 'Samia Shariff', id: 'ssh_1' },
            { name: 'Ayaan Shariff', id: 'ays_1' },
            { name: 'Alia Shariff', id: 'als_1' },
        ],
        maxPlusOnes: 0,
    },
    // Jamil Rashid Family
    {
        id: 'b_fam_15',
        side: 'bride',
        members: [
            { name: 'Jamil Rashid', id: 'jr_1' },
            { name: 'Fiza Rashid', id: 'fr_1' },
            { name: 'Usman Altafullah', id: 'ua_1' },
            { name: 'Ayesha Rashid', id: 'ayr_1' },
            { name: 'Soghra Ali', id: 'soa_1' },
            { name: 'Nazhat Rashid', id: 'nr_1' },
        ],
        maxPlusOnes: 0,
    },

    // Kala Family
    {
        id: 'b_fam_16',
        side: 'bride',
        members: [
            { name: 'Sana Kala', id: 'sank_1' },
            { name: 'Mohammed Kala', id: 'mohk_1' },
            { name: 'Aliyana Kala', id: 'alik_1' },
            { name: 'Musa Kala', id: 'musk_1' },
            { name: 'Ilham Kala', id: 'ilhk_1' },
        ],
        maxPlusOnes: 0,
    },
    // Naeem Family
    {
        id: 'b_fam_17',
        side: 'bride',
        members: [
            { name: 'Azmat Naeem', id: 'azn_1' },
            { name: 'Ayesha Naeem', id: 'ayn_1' },
            { name: 'Shahnaz Naeem', id: 'shn_1' },
        ],
        maxPlusOnes: 0,
    },
    // Zaman Family
    {
        id: 'b_fam_18',
        side: 'bride',
        members: [
            { name: 'Asra Zaman', id: 'az_1' },
            { name: 'Wasay Zaman', id: 'wz_1' },
            { name: 'Rafay Zaman', id: 'rz_1' },
            { name: 'Irfan Zaman', id: 'iz_1' },
        ],
        maxPlusOnes: 0,
    },
    // Siraj Family
    {
        id: 'b_fam_19',
        side: 'bride',
        members: [
            { name: 'Rani Siraj', id: 'rs_1' },
            { name: 'Adnan Siraj', id: 'as_1' },
        ],
        maxPlusOnes: 0,
    },
    // Ahmed Family
    {
        id: 'b_fam_20',
        side: 'bride',
        members: [
            { name: 'Zaman Ahmed', id: 'za_1' },
            { name: 'Shazia Ahmed', id: 'sa_1' },
            { name: 'Mohammad Ahmed', id: 'ma_1' },
            { name: 'Hamza Ahmed', id: 'ha_1' },
            { name: 'Noor Ahmed', id: 'na_1' },
        ],
        maxPlusOnes: 0,
    },

    // Sattar Family
    {
        id: 'b_fam_21',
        side: 'bride',
        members: [
            { name: 'Tanya Sattar', id: 'ts_1' },
            { name: 'Abdul Sattar', id: 'abs_1' },
            { name: 'Soha Sattar', id: 'sohs_1' },
            { name: 'Nadia Sattar', id: 'nads_1' },
        ],
        maxPlusOnes: 0,
    },
    // Nayeem Family
    {
        id: 'b_fam_22',
        side: 'bride',
        members: [
            { name: 'Zahid Nayeem', id: 'zn_1' },
            { name: 'Zarin Nayeem', id: 'zrn_1' },
        ],
        maxPlusOnes: 0,
    },
    // Asfand Family
    {
        id: 'b_fam_23',
        side: 'bride',
        members: [
            { name: 'Asfand Bhai', id: 'asfb_1' },
            { name: 'Lubna Asfand', id: 'la_1' },
        ],
        maxPlusOnes: 0,
    },
    // Rahmat Ullah Quadri Family
    {
        id: 'b_fam_24',
        side: 'bride',
        members: [
            { name: 'Rahmat Ullah Quadri', id: 'ruq_1' },
            { name: 'Mah Parveen Quadri', id: 'mpq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Hamza Quadri Family
    {
        id: 'b_fam_25',
        side: 'bride',
        members: [
            { name: 'Hamza Quadri', id: 'hq_1' },
            { name: 'Mahrukh Quadri', id: 'mhq_1' },
            { name: 'Mustafa Quadri', id: 'muq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Naveed Qazi Family
    {
        id: 'b_fam_26',
        side: 'bride',
        members: [
            { name: 'Naveed Qazi', id: 'nqz_1' },
            { name: 'Farheen Quadri', id: 'fhq_1' },
            { name: 'Zain Qazi', id: 'znq_1' },
            { name: 'Zubair Qazi', id: 'zbq_1' },
            { name: 'Maryam Zubair', id: 'mzb_1' },
        ],
        maxPlusOnes: 0,
    },
    // Sohail uddin Ahmed Family
    {
        id: 'b_fam_27',
        side: 'bride',
        members: [
            { name: 'Sohail Uddin Ahmed', id: 'sua_1' },
            { name: 'Ayesha Sohail', id: 'aysh_1' },
            { name: 'Sarfaraz Rashid', id: 'sfr_1' },
            { name: 'Maimoona Ahmed', id: 'mma_1' },
            { name: 'Zaki Ahmed', id: 'zka_1' },
        ],
        maxPlusOnes: 0,
    },
    // Najma Quadri Family
    {
        id: 'b_fam_28',
        side: 'bride',
        members: [
            { name: 'Najma Quadri', id: 'njq_1' },
            { name: 'Ozma Rahman', id: 'ozr_1' },
            { name: 'Aziz Rahman', id: 'azr_1' },
            { name: 'Mazin Rahman', id: 'mzr_1' },
        ],
        maxPlusOnes: 0,
    },
    // Afroze Rahman Family
    {
        id: 'b_fam_29',
        side: 'bride',
        members: [
            { name: 'Afroze Rahman', id: 'afr_1' },
            { name: 'Imran Ahmed', id: 'ima_1' },
            { name: 'Ayaan Ahmed', id: 'ayana_1' },
            { name: 'Hafsa Ahmed', id: 'hfa_1' },
        ],
        maxPlusOnes: 0,
    },
    // Amrullah Quadri Family
    {
        id: 'b_fam_30',
        side: 'bride',
        members: [
            { name: 'Amrullah Quadri', id: 'amq_1' },
            { name: 'Fahmina Quadri', id: 'fmq_1' },
            { name: 'Suha Quadri', id: 'suq_1' },
            { name: 'Marij Quadri', id: 'mrq_1' },
            { name: 'Zohair Quadri', id: 'zoq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Haniya Siddiqa Family
    {
        id: 'b_fam_31',
        side: 'bride',
        members: [
            { name: 'Haniya Siddiqa', id: 'hns_1' },
            { name: 'Naveed Khan', id: 'nvk_1' },
            { name: 'Samiya Naveed Khan', id: 'snk_1' },
            { name: 'Usman Khan', id: 'usk_2' },
        ],
        maxPlusOnes: 0,
    },
    // Ahmed Quadri Family
    {
        id: 'b_fam_32',
        side: 'bride',
        members: [
            { name: 'Ahmed Quadri', id: 'ahq_1' },
            { name: 'Hena Quadri', id: 'hnq_1' },
            { name: 'Zaid Quadri', id: 'zdq_1' },
            { name: 'Fyza Quadri', id: 'fyq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Adil Qazi Family
    {
        id: 'b_fam_33',
        side: 'bride',
        members: [
            { name: 'Adil Qazi', id: 'adq_1' },
            { name: 'Ayesha Qazi', id: 'ayq_1' },
            { name: 'Saad Qazi', id: 'sdq_1' },
            { name: 'Asad Qazi', id: 'asdq_1' },
            { name: 'Rafaay Quadri', id: 'rfq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Qayyum Ahmed Family
    {
        id: 'b_fam_34',
        side: 'bride',
        members: [
            { name: 'Qayyum Ahmed', id: 'qya_1' },
            { name: 'Sadia Qayyum', id: 'sdqa_1' },
            { name: 'Sohaib Ahmed', id: 'soha_1' },
        ],
        maxPlusOnes: 0,
    },
    // Owais Ahmed Family
    {
        id: 'b_fam_35',
        side: 'bride',
        members: [
            { name: 'Owais Ahmed', id: 'owa_1' },
            { name: 'Meher Ahmed', id: 'mha_1' },
            { name: 'Ayub Ahmed', id: 'ayba_1' },
            { name: 'Safina Ahmed', id: 'sfna_1' },
        ],
        maxPlusOnes: 0,
    },
    // Hassan Ahmed Family
    {
        id: 'b_fam_36',
        side: 'bride',
        members: [
            { name: 'Hassan Ahmed', id: 'hsa_1' },
            { name: 'Asra Hassan', id: 'ash_1' },
        ],
        maxPlusOnes: 0,
    },
    // Hassan Sulehri Family
    {
        id: 'b_fam_37',
        side: 'bride',
        members: [
            { name: 'Hassan Sulehri', id: 'hsl_1' },
            { name: 'Zehra Quadri', id: 'zhq_1' },
            { name: 'Enaya Sulehri', id: 'ensl_1' },
            { name: 'Ayeza Sulehri', id: 'aysl_1' },
        ],
        maxPlusOnes: 0,
    },
    // Mariam Quadri Family
    {
        id: 'b_fam_38',
        side: 'bride',
        members: [
            { name: 'Mariam Quadri', id: 'mriq_1' },
            { name: 'Tariq Ali', id: 'tral_1' },
            { name: 'Mikael Ali', id: 'mkal_1' },
        ],
        maxPlusOnes: 0,
    },
    // Asra Quadri Family
    {
        id: 'b_fam_39',
        side: 'bride',
        members: [
            { name: 'Asra Quadri', id: 'asq_1' },
            { name: 'Ghazala Quadri', id: 'ghq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Hera Quadri Family
    {
        id: 'b_fam_40',
        side: 'bride',
        members: [
            { name: 'Hera Quadri', id: 'hrq_1' },
            { name: 'Alfaaz', id: 'alf_1' },
        ],
        maxPlusOnes: 0,
    },
    // Shameem Quadri Family
    {
        id: 'b_fam_41',
        side: 'bride',
        members: [
            { name: 'Shameem Quadri', id: 'shmq_1' },
            { name: 'Talat Quadri', id: 'tlq_1' },
            { name: 'Hareem Quadri', id: 'hrmq_1' },
            { name: 'Omar Quadri', id: 'omq_1' },
            { name: 'Sanya Quadri', id: 'snq_1' },
        ],
        maxPlusOnes: 0,
    },

    // Shazia Tanveer
    {
        id: 'b_fam_42',
        side: 'bride',
        members: [{ name: 'Shazia Tanveer', id: 'sht_1' }],
        maxPlusOnes: 0,
    },

    // --- Bride's Friends ---
    ...[
        'Shawdie', 'Bismah Hamid', 'Rytha', 'Aqsa', 'Ayesha',
        'Kathir', 'Sid', 'Anushka', 'Sam', 'Sahil',
        'Rastogi', 'Nadin', 'Rachita', 'Dan', 'Ghania',
        'Aleena', 'Lamees', 'Amani', 'Prits', 'Elena',
        'Mahdi', 'Aryan', 'Aditi', 'Ana', 'Muhammad Anjum',
        'Dana', 'Judy', 'Yahya Naveed'
    ].map((name, idx) => ({
        id: `b_friend_${idx}`,
        side: 'bride',
        members: [{ name, id: `bf_${idx}` }],
        maxPlusOnes: 0,
    })),
];
