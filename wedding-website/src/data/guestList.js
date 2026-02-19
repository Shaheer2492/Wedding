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
            { name: 'Daniyal Khan', id: 'dk_1' },
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
            { name: 'Noor Quadar', id: 'nq_1' },
            { name: 'Fatima Quadar', id: 'fq_1' },
            { name: 'Zain Quadar', id: 'zq_1' },
        ],
        maxPlusOnes: 0,
    },
    // Mahnoor Baji
    {
        id: 'g_fam_11',
        side: 'groom',
        members: [
            { name: 'Mahnoor Baji', id: 'mbj_1' },
            { name: 'David', id: 'dav_1' },
        ],
        maxPlusOnes: 0,
    },
    // Bilal Bhai
    {
        id: 'g_fam_12',
        side: 'groom',
        members: [{ name: 'Bilal Bhai', id: 'bb_1' }],
        maxPlusOnes: 0,
    },
    // Akhtar Uncle
    {
        id: 'g_fam_13',
        side: 'groom',
        members: [{ name: 'Akhtar Uncle', id: 'au_1' }],
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
        'Shayan Hasan', 'Hasnain Farishta', 'Rishabh Kalyanakunmar', 'Aahil Ali'
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

    // --- Bride's Friends ---
    ...[
        'Shawdie', 'Bismah', 'Rytha', 'Aqsa', 'Ayesha',
        'Kathir', 'Sid', 'Anushka', 'Sam', 'Sahil',
        'Rastogi', 'Nadin', 'Rachita', 'Dan', 'Ghania',
        'Aleena', 'Lamees', 'Amani', 'Prits', 'Elena',
        'Mahdi', 'Aryan', 'Aditi', 'Ana', 'Muhammad anjum',
        'Dana', 'Judy'
    ].map((name, idx) => ({
        id: `b_friend_${idx}`,
        side: 'bride',
        members: [{ name, id: `bf_${idx}` }],
        maxPlusOnes: 0,
    })),
];
