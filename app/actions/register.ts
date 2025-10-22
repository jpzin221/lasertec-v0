"use server"

/**
 * FUNÇÃO DE REGISTRO DE USUÁRIO
 *
 * Esta função está preparada para integração com banco de dados.
 * Siga os passos abaixo para conectar ao seu banco:
 *
 * PASSO 1: Instale o cliente do seu banco de dados
 * Exemplos:
 * - Para Supabase: npm install @supabase/supabase-js
 * - Para Neon/PostgreSQL: npm install @neondatabase/serverless
 * - Para MongoDB: npm install mongodb
 *
 * PASSO 2: Configure as variáveis de ambiente
 * Adicione no arquivo .env.local:
 * DATABASE_URL=sua_url_de_conexao
 *
 * PASSO 3: Descomente e adapte o código de exemplo abaixo
 */

interface RegisterData {
  fullName: string
  phone: string
}

interface RegisterResult {
  success: boolean
  error?: string
}

export async function registerUser(data: RegisterData): Promise<RegisterResult> {
  try {
    // Validação dos dados
    if (!data.fullName || !data.phone) {
      return {
        success: false,
        error: "Dados incompletos",
      }
    }

    // ============================================
    // INTEGRAÇÃO COM BANCO DE DADOS - ADICIONE AQUI
    // ============================================

    /**
     * EXEMPLO COM SUPABASE:
     *
     * import { createClient } from '@supabase/supabase-js'
     *
     * const supabase = createClient(
     *   process.env.NEXT_PUBLIC_SUPABASE_URL!,
     *   process.env.SUPABASE_SERVICE_ROLE_KEY!
     * )
     *
     * const { data: user, error } = await supabase
     *   .from('users')
     *   .insert([
     *     {
     *       full_name: data.fullName,
     *       phone: data.phone,
     *       created_at: new Date().toISOString()
     *     }
     *   ])
     *   .select()
     *
     * if (error) {
     *   console.error('Erro ao cadastrar:', error)
     *   return { success: false, error: 'Erro ao cadastrar usuário' }
     * }
     */

    /**
     * EXEMPLO COM NEON/POSTGRESQL:
     *
     * import { neon } from '@neondatabase/serverless'
     *
     * const sql = neon(process.env.DATABASE_URL!)
     *
     * await sql`
     *   INSERT INTO users (full_name, phone, created_at)
     *   VALUES (${data.fullName}, ${data.phone}, NOW())
     * `
     */

    /**
     * EXEMPLO COM MONGODB:
     *
     * import { MongoClient } from 'mongodb'
     *
     * const client = new MongoClient(process.env.DATABASE_URL!)
     * await client.connect()
     *
     * const db = client.db('laser_tec')
     * const users = db.collection('users')
     *
     * await users.insertOne({
     *   fullName: data.fullName,
     *   phone: data.phone,
     *   createdAt: new Date()
     * })
     *
     * await client.close()
     */

    // ============================================
    // FIM DA SEÇÃO DE INTEGRAÇÃO
    // ============================================

    // Por enquanto, apenas simula sucesso
    // Remova este console.log após integrar com o banco
    console.log("[v0] Dados recebidos para cadastro:", {
      fullName: data.fullName,
      phone: data.phone,
      timestamp: new Date().toISOString(),
    })

    // Simula um pequeno delay (remova após integrar com banco real)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
    }
  } catch (error) {
    console.error("[v0] Erro no cadastro:", error)
    return {
      success: false,
      error: "Erro ao processar cadastro",
    }
  }
}
