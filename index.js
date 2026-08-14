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
  .setDescription('Lista completa a joburilor legale si lunile necesare.')
  .addFields(
    { name: '🟢 0 luni', value: '• Santierist\n• Gunoier\n• Sofer la Posta\n• Sofer pe Autobuz\n• Fermier\n• Taximetrist\n' },
    { name: '🟢 25 luni', value: '• Sofer la PostOP\n• Angajat la Burgershot\n' },
    { name: '🟢 50 luni', value: '• Pescar\n• Sofer pe Autobuz Avansat\n• Amenajari exterioare\n' },
    { name: '🟢 75 luni', value: '• Croitor\n' },
    { name: '🟢 125 luni', value: '• Petrolist\n• Bursa - Sofer pe Tir\n• Miner\n• Taietor de lemne\n' },
    { name: '🟢 175 luni', value: '• Transport valori\n• Electrician\n' },
    { name: '🟢 300 luni', value: '• Scafandru Recuperator\n• Scafandru Miner\n' },
    { name: '🟢 500 luni', value: '• Pilot Avion\n• Miner Avansat\n' },
    { name: '🟢 625 luni', value: '• Pescar Avansat\n' },
    { name: '🟢 750 luni', value: '• Petrolist Avansat\n' },
    { name: '🟢 1000 luni', value: '• Cautator de Perle\n• Pilot Ferma\n' },
    { name: '🟢 1500 luni', value: '• Vatman\n' },
    { name: '🟢 2000 luni', value: '• Vanator\n' },
    { name: '🟢 5000 luni', value: '• Mecanic de locomotiva\n' }
  );

// ================= ILLEGAL JOBS =================
const illegalJobs = new EmbedBuilder()
  .setColor(0xe74c3c)
  .setTitle('☠️ Joburi Ilegale')
  .setDescription('Lista completă a joburilor ilegale si lunile necesare.')
  .addFields(
    { name: '🔴 Codeina', value: '➡️ 100 luni productie / 100 luni livrare\n' },
    { name: '🔴 Tabacco', value: '➡️ 300 luni productie / 150 luni livrare\n' },
    { name: '🔴 Etnobotanice', value: '➡️ 500 luni productie / 250 luni livrare\n' },
    { name: '🔴 Marijuana', value: '➡️ 700 luni productie / 350 luni livrare\n' },
    { name: '🔴 Hacker', value: '➡️ 900h productie / 450h livrare\n' },
    { name: '🔴 Ecstasy', value: '➡️ 1100 luni productie / 550 luni livrare\n' },
    { name: '🔴 Cocaina', value: '➡️ 1300 luni productie / 650 luni livrare\n' },
    { name: '🔴 Metamfetamina', value: '➡️ 1500 luni productie / 750 luni livrare\n' },
    { name: '🔴 Traficant de Ciuperci', value: '➡️ 1750 luni productie / 875 luni livrare\n' },
    { name: '🔴 LSD', value: '➡️ 2000 luni productie / 1000 luni livrare\n' }
  );

// ================= HAPPY HOURS =================
const happyHours = new EmbedBuilder()
  .setColor(0xf1c40f)
  .setTitle('🌙 Happy Hours & Tura de Noapte')
  .setDescription('Bonusuri speciale pentru joburi legale si activitati speciale.')

  .addFields(
    {
      name: '🌙 Tura de noapte (23:00 - 08:00)',
      value: ''
    },
    {
      name: '📅 Luni',
      value: '• Sofer pe Autobuz\n• Fermier\n• Santierist\n• Electrician\n• Croitor\n• Mecanic\n'
    },
    {
      name: '📅 Marti',
      value: '• Gunoier\n• Angajat Burger-Shot\n• Sofer la Post-OP\n• Pilot Ferma\n• Petrolist\n'
    },
    {
      name: '📅 Miercuri',
      value: '• Sofer pe Autobuz Avansat\n• Sofer pe Tir\n• Transport Valori\n• Taietor de Lemne\n• Vatman\n• Mecanic\n'
    },
    {
      name: '📅 Joi',
      value: '• Servicii Intretinere Exterioara\n• Pilot Avion\n• Petrolist Avansat\n• Santierist\n• Fermier\n'
    },
    {
      name: '📅 Vineri',
      value: '• Sofer la Posta\n• Angajat Burger-Shot\n• Croitor\n• Electrician\n• Sofer pe Autobuz\n• Mecanic\n'
    },
    {
      name: '📅 Sambata',
      value: '• Sofer pe Tir\n• Transport Valori\n• Taietor Lemne\n• Sofer la Post-OP\n• Vatman\n'
    },
    {
      name: '📅 Duminica',
      value: '• Pilot Ferma\n• Petrolist\n• Servicii Intretinere Exterioara\n• Sofer pe Autobuz Avansat\n• Pilot Avion\n'
    },
    {
      name: '🎣 Pescar / Pescar Avansat',
      value: '**📅 Marti, Joi, Sambata** - ⏰ **05:00 - 09:00**\n'
    },
    {
      name: '⛏️ Miner / Miner Avansat / Scafandru Miner',
      value: '**📅 Luni, Miercuri, Vineri** - ⏰ **23:00 - 08:00**\n'
    },
    {
      name: '🤿 Scafandru Recuperator',
      value: '**📅 Luni, Miercuri, Vineri** - ⏰ **23:00 - 08:00**\n'
    },
    {
      name: '🦪 Cautator de Perle',
      value: '**📅 Luni, Miercuri, Vineri** - ⏰ **23:00 - 08:00**\n'
    }
  );

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
