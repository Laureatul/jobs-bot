const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events
} = require('discord.js');

require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ================= LEGAL JOBS =================
const legalJobs = new EmbedBuilder()
  .setColor(0x2ecc71)
  .setTitle('📋 Joburi Legale')
  .setDescription('Lista completă a joburilor legale și orele necesare.')
  .addFields(
    { name: '🟢 0 ore', value: '• Santierist\n• Gunoier\n• Sofer la Posta\n• Sofer pe Autobuz\n• Fermier\n• Taximetrist' },
    { name: '🟢 25 ore', value: '• Sofer la PostOP\n• Angajat la Burgershot' },
    { name: '🟢 50 ore', value: '• Pescar\n• Sofer pe Autobuz Avansat\n• Amenajari exterioare' },
    { name: '🟢 75 ore', value: '• Croitor' },
    { name: '🟢 125 ore', value: '• Petrolist\n• Bursa - Sofer pe Tir\n• Miner\n• Taietor de lemne' },
    { name: '🟢 175 ore', value: '• Transport valori\n• Electrician' },
    { name: '🟢 300 ore', value: '• Scafandru Recuperator\n• Scafandru Miner' },
    { name: '🟢 500 ore', value: '• Pilot Avion\n• Miner Avansat' },
    { name: '🟢 625 ore', value: '• Pescar Avansat' },
    { name: '🟢 750 ore', value: '• Petrolist Avansat' },
    { name: '🟢 1000 ore', value: '• Cautator de Perle\n• Pilot Ferma' },
    { name: '🟢 1500 ore', value: '• Vatman' },
    { name: '🟢 2000 ore', value: '• Vanator' },
    { name: '🟢 5000 ore', value: '• Mecanic de locomotiva' }
  )
  .setFooter({ text: 'Sistem Joburi • Legale' });

// ================= ILLEGAL JOBS =================
const illegalJobs = new EmbedBuilder()
  .setColor(0xe74c3c)
  .setTitle('☠️ Joburi Ilegale')
  .setDescription('Lista completă a joburilor ilegale și orele necesare.')
  .addFields(
    { name: '🔴 100 ore', value: '• Codeina\n➡️ 100h productie / 100h livrare' },
    { name: '🔴 300 ore', value: '• Tabacco\n➡️ 300h productie / 150h livrare' },
    { name: '🔴 500 ore', value: '• Etnobotanice\n➡️ 500h productie / 250h livrare' },
    { name: '🔴 700 ore', value: '• Marijuana\n➡️ 700h productie / 350h livrare' },
    { name: '🔴 900 ore', value: '• Hacker\n➡️ 900h productie / 450h livrare' },
    { name: '🔴 1100 ore', value: '• Ecstasy\n➡️ 1100h productie / 550h livrare' },
    { name: '🔴 1300 ore', value: '• Cocaina\n➡️ 1300h productie / 650h livrare' },
    { name: '🔴 1500 ore', value: '• Metamfetamina\n➡️ 1500h productie / 750h livrare' },
    { name: '🔴 1750 ore', value: '• Traficant de Ciuperci\n➡️ 1750h productie / 875h livrare' },
    { name: '🔴 2000 ore', value: '• LSD\n➡️ 2000h productie / 1000h livrare' }
  )
  .setFooter({ text: 'Sistem Joburi • Ilegale' });

// ================= HAPPY HOURS =================
const happyHours = new EmbedBuilder()
  .setColor(0xf1c40f)
  .setTitle('🌙 Happy Hours & Tura de Noapte')
  .setDescription('Bonusuri speciale pentru joburi legale și activități speciale.')

  .addFields(
    {
      name: '🌙 Tura de noapte (23:00 - 08:00)',
      value: 'Toate joburile legale primesc **+20% reward** în intervalul **23:00 - 08:00**.'
    },

    {
      name: '📅 Luni',
      value: '• Sofer pe Autobuz\n• Fermier\n• Santierist\n• Electrician\n• Croitor\n• Mecanic'
    },

    {
      name: '📅 Marti',
      value: '• Gunoier\n• Angajat Burger-Shot\n• Sofer la Post-OP\n• Pilot Ferma\n• Petrolist'
    },

    {
      name: '📅 Miercuri',
      value: '• Sofer pe Autobuz Avansat\n• Sofer pe Tir\n• Transport Valori\n• Taietor de Lemne\n• Vatman\n• Mecanic'
    },

    {
      name: '📅 Joi',
      value: '• Servicii Intretinere Exterioara\n• Pilot Avion\n• Petrolist Avansat\n• Santierist\n• Fermier'
    },

    {
      name: '📅 Vineri',
      value: '• Sofer la Posta\n• Angajat Burger-Shot\n• Croitor\n• Electrician\n• Sofer pe Autobuz\n• Mecanic'
    },

    {
      name: '📅 Sambata',
      value: '• Sofer pe Tir\n• Transport Valori\n• Taietor Lemne\n• Sofer la Post-OP\n• Vatman'
    },

    {
      name: '📅 Duminica',
      value: '• Pilot Ferma\n• Petrolist\n• Servicii Intretinere Exterioara\n• Sofer pe Autobuz Avansat\n• Pilot Avion'
    },

    {
      name: '🎣 Pescar / Pescar Avansat',
      value: '**Marti / Joi / Sambata**\n⏰ **05:00 - 09:00**'
    },

    {
      name: '⛏️ Miner / Miner Avansat / Scafandru Miner',
      value: '**Luni / Miercuri / Vineri**\n⏰ **23:00 - 08:00**\n• 10% minereu crapat → **3%**\n• **+20% sansa** la aur sau argint'
    },

    {
      name: '🤿 Scafandru Recuperator',
      value: '**Luni / Miercuri / Vineri**\n⏰ **23:00 - 08:00**\n• Sanse mai mari sa primiti **arme** in loc de gunoaie'
    },

    {
      name: '🦪 Cautator de Perle',
      value: '**Luni / Miercuri / Vineri**\n⏰ **23:00 - 08:00**\n• Sanse mai mari sa primiti **2 sau 3 scoici** in loc de una'
    }
  )

  .setFooter({ text: 'Sistem Joburi • Happy Hours' });

// ================= BOT READY =================
client.once(Events.ClientReady, async c => {
  console.log(`✅ Bot online ca ${c.user.tag}`);

  const channelId = process.env.CHANNEL_ID;

  if (!channelId) {
    console.log('❌ CHANNEL_ID nu a fost gasit');
    return;
    }
  
  try {
  const channel = await client.channels.fetch(channelId);

  if (!channel) {
    console.log('❌ Canalul nu a fost gasit');
    return;
  }

  const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('legal')
      .setLabel('Joburi Legale')
      .setStyle(ButtonStyle.Success),

    new ButtonBuilder()
      .setCustomId('illegal')
      .setLabel('Joburi Ilegale')
      .setStyle(ButtonStyle.Danger),

    new ButtonBuilder()
      .setCustomId('happy')
      .setLabel('Happy Hours')
      .setStyle(ButtonStyle.Primary)
  );

  await channel.send({
    content: '📚 **Selectează categoria de joburi:**',
    components: [buttons]
  });

  console.log('✅ Mesaj trimis cu succes');
  } catch (error) {
    console.error('❌ Eroare la accesarea canalului:', error.message);
  }
});

// ================= INTERACTIONS =================
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'legal') {
    await interaction.reply({
      embeds: [legalJobs],
      ephemeral: true
    });
  }

  if (interaction.customId === 'illegal') {
    await interaction.reply({
      embeds: [illegalJobs],
      ephemeral: true
    });
  }

  if (interaction.customId === 'happy') {
    await interaction.reply({
      embeds: [happyHours],
      ephemeral: true
    });
  }
});

// ================= LOGIN =================
client.login(process.env.TOKEN);